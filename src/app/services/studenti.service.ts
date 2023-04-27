import { Injectable } from '@angular/core';
import { Studente } from '../models/studente.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  mieiStudenti:Studente[] = [
    new Studente(1, "Luca", "Gennaro", ["ang1", "Ang2", "HtCs3"]),
    new Studente(2, "Dario", "Rossi", ["ang1", "Ang2", "HtCs3"]),
    new Studente(3, "Adrian", "Gialli", ["ang1", "Ang2", "Java"])
  ]

  constructor() { }

  descriviStudente(matricola: number): Studente{
    let indice = matricola - 1;
    let mioStudente = this.mieiStudenti[indice];

    return mioStudente
  }
}
