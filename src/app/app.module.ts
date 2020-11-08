import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album/album.component';
import { AlbumDetailComponent } from './components/album/album-detail/album-detail.component';
import { AlbumEditComponent } from './components/album/album-edit/album-edit.component';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { ArtistComponent } from './components/artist/artist/artist.component';
import { ArtistDetailComponent } from './components/artist/artist-detail/artist-detail.component';
import { ArtistEditComponent } from './components/artist/artist-edit/artist-edit.component';
import { ArtistCreateComponent } from './components/artist/artist-create/artist-create.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumDetailComponent,
    AlbumEditComponent,
    AlbumCreateComponent,
    ArtistComponent,
    ArtistDetailComponent,
    ArtistEditComponent,
    ArtistCreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
