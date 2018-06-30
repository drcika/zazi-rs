import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpService } from '../services/http.service';
import { WowService } from '../services/wow.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private wowService: WowService, private httpService: HttpService) { }

  ngOnInit() {
    this.wowService.wowInit();
    this.initForm();
  }

  onSubmit() {
    this.httpService.postData(this.contactForm.value);
  }

  private initForm() {
    let name = '';
    let eMail = '';
    let message = '';

    this.contactForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'eMail': new FormControl(eMail, Validators.required),
      'message': new FormControl(message, Validators.required)
    });

  }
}
