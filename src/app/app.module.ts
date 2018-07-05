import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionsComponent } from './pages/collections/collections.component';
import { GalleryComponent } from './pages/collections/gallery/gallery.component';

import { HttpService } from './pages/services/http.service';
import { WowService } from './pages/services/wow.service';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    BiographyComponent,
    ContactComponent,
    CollectionsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'zazi-app'}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot({
      panelClass: 'fullscreen'
    }),
    GallerizeModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [HttpService, WowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
