import { Injectable } from '@angular/core';
import { WOW } from 'wowjs/dist/wow';

@Injectable({
  providedIn: 'root'
})
export class WowService {

  constructor() { }

  wowInit() {
    new WOW({
      live: false
  }).init();
  }
}
