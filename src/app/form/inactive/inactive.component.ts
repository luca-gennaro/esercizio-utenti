import { Component } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent {
  listaInactive: Utente[] = []

  constructor(private utentiService: UtentiService){
    this.listaInactive = utentiService.ListaInactive
}

onModStatus(status: "Active" | "Inactive", index: number){
  this.utentiService.setActive(status, index)
}

}
