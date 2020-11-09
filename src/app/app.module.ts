import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album/album.component';
import { AlbumDetailComponent } from './components/album/album-detail/album-detail.component';
import { AlbumEditComponent } from './components/album/album-edit/album-edit.component';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { ArtistComponent } from './components/artist/artist/artist.component';
import { ArtistEditComponent } from './components/artist/artist-edit/artist-edit.component';
import { ArtistCreateComponent } from './components/artist/artist-create/artist-create.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseDialogComponent } from './components/coursedialog/coursedialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumDetailComponent,
    AlbumEditComponent,
    AlbumCreateComponent,
    ArtistComponent,
    ArtistEditComponent,
    ArtistCreateComponent,
    HomeComponent,
    NavbarComponent,
    CourseDialogComponent
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
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
