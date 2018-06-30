import { Component, OnInit } from '@angular/core';
import { WowService } from '../services/wow.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  constructor(private wowService: WowService) { }

  ngOnInit() {
    this.wowService.wowInit();
  }

}
