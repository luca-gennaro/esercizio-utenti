export class Studente {
  matricola: number;
  nome: string;
  cognome: string;
  codiceCorsi: string[]

  constructor(matricola: number, nome: string, cognome: string, codiceCorsi: string[]){
    this.matricola = matricola;
    this.nome = nome;
    this.cognome = cognome;
    this.codiceCorsi = codiceCorsi
  }
}
