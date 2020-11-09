import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Artistservice } from 'src/app/services/artist/artist.service';

import { ArtistDialogEditComponent } from '../dialogs/artist/edit/artistdialogedit.component';
import { ArtistDialogCreateComponent } from '../dialogs/artist/create/artistdialogcreate.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  displayedColumns = [
    'name',
    'photo-link',
    'birthdate',
    'deathdate',
    'edit',
    'delete',
  ];

  artists: any;

  constructor(
    private artistService: Artistservice,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllArtist();
  }

  async getAllArtist(): Promise<void> {
    this.artistService.getArtists().subscribe(
      (data) => {
        this.artists = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async delete(id) {
    this.artistService.deleteArtist(id).subscribe(
      (data) => {
        this.artists = data;
        console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
 
  }

  openDialogedit(artists) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      artists,
    };

    const dialogRef = this.dialog.open(ArtistDialogEditComponent, dialogConfig);

    dialogRef.afterClosed();
  }

  openDialogCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(
      ArtistDialogCreateComponent,
      dialogConfig
    );
    dialogRef.afterClosed();
  }
}
