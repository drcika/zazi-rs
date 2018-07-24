import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HttpService } from '../../services/http.service';
import { dataModel } from '../../../data.model';

import { Gallery } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 public imageData: dataModel[];
 public subImageData: dataModel[];
 public collections: {collection: string, subCollection: string};

  constructor( 
    private httpService: HttpService,
    public gallery: Gallery,
    public lightbox: Lightbox,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.collections = {
      collection: this.route.snapshot.params['collection'],
      subCollection: this.route.snapshot.params['subCollection'],
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.collections.collection = params['collection']
        this.collections.subCollection = params['subCollection']
        console.log(this.collections.collection);
        console.log(this.collections.subCollection);
      }

    );
    this.httpService.getData()
    .subscribe((data: dataModel): void => {
      this.imageData = data.pages[2].subPages;
      this.subImageData = data.pages[2].subPages[4].subPages;
    });
  }

  openLightbox() {
    this.lightbox.open(0, 'lightbox');
  }

}