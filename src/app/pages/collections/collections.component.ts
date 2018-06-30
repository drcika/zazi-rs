import { Component, OnInit } from '@angular/core';
import { WowService } from '../services/wow.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(private wowService: WowService) { }

  ngOnInit() {
    this.wowService.wowInit();
  }

}
