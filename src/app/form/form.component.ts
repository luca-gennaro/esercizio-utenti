import { Component } from '@angular/core';
import { UtentiService } from '../services/utenti.service';
import { Utente } from '../models/utente.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private utenteService: UtentiService ){

  }

username: string;
status: "Active" | "Inactive"

onAggiungiUtente(){
  this.utenteService.aggiungiUtente(new Utente(this.username, this.status, 0, 0))
}




}
