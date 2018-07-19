import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { dataModel } from '../../data.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() subItems: dataModel[];
  @ViewChild('subMenu') public subMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
