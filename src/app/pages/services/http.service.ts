import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContactModel } from '../contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/data/gallery.json');
  }

  postData(contact: ContactModel) {
    console.log(contact);
    this.http.post('/assets/data/sendmail.php', contact);
  }
}