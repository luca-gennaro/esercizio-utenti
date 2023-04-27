export class Utente {
  username: string;
  status: "Active" | "Inactive"
  countActive: number;
  countInactive: number;

  constructor(username: string, status: "Active" | "Inactive", countActive: number, countInactive: number){
    this.username = username;
    this.status = status;
    this.countActive = countActive;
    this.countInactive = countInactive;
  }
}
