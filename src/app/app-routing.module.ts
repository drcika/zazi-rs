import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { BiographyComponent } from "./pages/biography/biography.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CollectionsComponent } from "./pages/collections/collections.component";
import { GalleryComponent } from "./pages/collections/gallery/gallery.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'biography', component: BiographyComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'collections', component: CollectionsComponent },
  {path: 'collections/:id', component: GalleryComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}