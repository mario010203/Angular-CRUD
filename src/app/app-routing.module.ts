import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ArtistComponent } from './components/artist/artist/artist.component';
import { ArtistDetailComponent } from './components/artist/artist-detail/artist-detail.component';
import { ArtistEditComponent } from './components/artist/artist-edit/artist-edit.component';
import { ArtistCreateComponent } from './components/artist/artist-create/artist-create.component';

import { AlbumComponent } from './components/album/album/album.component';
import { AlbumDetailComponent } from './components/album/album-detail/album-detail.component';
import { AlbumEditComponent } from './components/album/album-edit/album-edit.component';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'artist', component: ArtistComponent, pathMatch: 'full' },
  { path: 'artist/detail/:id', component: ArtistDetailComponent },
  { path: 'artist/edit/:id', component: ArtistEditComponent },
  {
    path: 'artist/create',
    component: ArtistCreateComponent,
    pathMatch: 'full',
  },
  { path: 'albums', component: AlbumComponent, pathMatch: 'full' },
  { path: 'album/detail/:id', component: AlbumDetailComponent },
  { path: 'album/edit/:id', component: AlbumEditComponent },
  { path: 'album/create', component: AlbumCreateComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
