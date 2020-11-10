import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Albumservice } from 'src/app/services/album/album.service';

import { AlbumDialogEditComponent } from '../dialogs/album/edit/albumdialogedit.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  displayedColumns = ['name', 'coverUrl', 'year', 'genre', 'edit', 'delete'];

  albums: any;

  constructor(private albumService: Albumservice, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllAlbums();
  }

  async getAllAlbums(): Promise<void> {
    this.albumService.getAlbums().subscribe(
      (data) => {
        this.albums = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async getAllAlbum(): Promise<void> {
    this.albumService.getAlbum().subscribe(
      (data) => {
        this.albums = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async delete(id) {
    this.albumService.deleteAlbum(id).subscribe(
      (data) => {
        this.albums = data;
        console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialogedit(albums) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      albums,
    };

    const dialogRef = this.dialog.open(AlbumDialogEditComponent, dialogConfig);

    dialogRef.afterClosed();
  }

  redirect() {
    window.location.href = '/artists';
  }
}
