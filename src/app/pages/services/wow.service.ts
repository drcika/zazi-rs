import { Injectable } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Injectable({
  providedIn: 'root'
})
export class WowService {

  constructor() { }

  wowInit() {
    new WOW().init();
  }
}
