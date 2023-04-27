import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  ListaActive: Utente[] = [
    new Utente("Luca", "Active", 0, 0),
    new Utente("Dario", "Active", 0, 0),
    new Utente("Matteo", "Active", 0, 0),
    new Utente("Adrian", "Active", 0, 0),

  ]

  ListaInactive: Utente[] = [
    new Utente("Adriano", "Inactive", 0, 0),
    new Utente("Giada", "Inactive", 0, 0),
    new Utente("Flavio", "Inactive", 0, 0),
    new Utente("Ivan", "Inactive", 0, 0),
  ]

  constructor() { }

  aggiungiUtente(utente: Utente){
    if(utente.status === "Active"){
      this.ListaActive.push(utente)
      console.log(this.ListaActive);

    }else{
      this.ListaInactive.push(utente)
      console.log(this.ListaInactive);
    }
  }

  setInactive(status: "Active" | "Inactive", indice: number): void {
    this.ListaActive[indice].status = status;
    this.ListaActive[indice].countInactive++
    this.ListaInactive.push(this.ListaActive[indice])
    this.ListaActive.splice(indice, 1)
  }
  setActive(status: "Active" | "Inactive", indice: number): void {
    this.ListaInactive[indice].status = status;
    this.ListaInactive[indice].countActive++
    this.ListaActive.push(this.ListaInactive[indice])
    this.ListaInactive.splice(indice, 1)
  }
}
