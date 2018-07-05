import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';

import { ContactModel } from '../contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // private newMessages: ContactModel;

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  // addNewContactToDb() {
  //   this.addDataToDatabase({
  //     ...this.newMessages,
  //   });
  // }
  getData() {
    return this.http.get('/assets/data/gallery.json');
  }

  addDataToDatabase(contact: ContactModel) {
    console.log(contact);
    this.db.collection('messages').add(contact);
  }
}