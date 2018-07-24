import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';

import { ContactModel } from '../contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  getData() {
    return this.http.get('/assets/data/data.json');
  }

  addDataToDatabase(contact: ContactModel) {
    console.log(contact);
    this.db.collection('messages').add(contact);
  }
}