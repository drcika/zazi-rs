import { Component, OnInit } from '@angular/core';

import { dataModel } from '../data.model';
import { HttpService } from '../pages/services/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navItems: dataModel[];
  socItems: dataModel[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
    .subscribe((data: dataModel): void => {
      this.navItems = data.pages;
      this.socItems = data.socMedia;
    });

  }

}
