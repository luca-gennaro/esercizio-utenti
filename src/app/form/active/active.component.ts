import { Component } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {

  listaActive: Utente[] = []

  constructor(private utentiService: UtentiService){
    this.listaActive = utentiService.ListaActive
  }

  onModStatus(status: "Active" | "Inactive", index: number){
    this.utentiService.setInactive(status, index)
  }

}
