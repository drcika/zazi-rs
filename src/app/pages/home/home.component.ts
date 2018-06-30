import { Component, OnInit } from '@angular/core';
import { WowService } from '../services/wow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private wowService: WowService) { }

  ngOnInit() {
    this.wowService.wowInit();
  }
 
}
