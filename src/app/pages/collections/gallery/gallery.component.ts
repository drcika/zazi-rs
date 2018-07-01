import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HttpService } from '../../services/http.service';
import { ImageModel } from '../image.model';

import { Gallery } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 public imageData: ImageModel;
 public kolekcija: {id: string};

  constructor( 
    private httpService: HttpService,
    public gallery: Gallery,
    public lightbox: Lightbox,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.kolekcija = {
      id: this.route.snapshot.params['id'],
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.kolekcija.id = params['id']
      }
    );
    this.httpService.getData()
    .subscribe((data: ImageModel): void => {
      this.imageData = data;
    });
  }

  openLightbox() {
    this.lightbox.open(0, 'lightbox');
  }

}