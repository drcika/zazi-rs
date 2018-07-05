export class ContactModel {
  public name: string;
  public eMail: string;
  public message: string;
  public date?: Date;


  constructor( name: string, eMail: string, message: string, date: Date) {
    this.name = name;
    this.eMail = eMail;
    this.message = message;
    this.date = date;
  }
} 