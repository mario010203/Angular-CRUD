import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { NavbarComponent } from './components/navbar/navbar.component';

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
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTableModule,
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
