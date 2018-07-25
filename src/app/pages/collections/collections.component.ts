import { Component, OnInit } from '@angular/core';
import { WowService } from '../services/wow.service';
import { HttpService } from '../services/http.service';
import { dataModel } from '../../data.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  
  public collestionData: dataModel[];

  constructor(private httpService: HttpService, private wowService: WowService) { }

  ngOnInit() {
    // this.httpService.getData()
    // .subscribe((data: dataModel): void => {
    //   this.collestionData = data.pages[2].subPages;
    // });
    this.wowService.wowInit();
  }

}
