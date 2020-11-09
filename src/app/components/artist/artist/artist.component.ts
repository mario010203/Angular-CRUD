import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Artistservice } from 'src/app/services/artist/artist.service';

import { CourseDialogComponent } from 'src/app/components/coursedialog/coursedialog.component';

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
      },
      (error) => {
        console.log(error);
      }
    );
    this.ngOnInit();
  }

  openDialog(artists) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      artists,
    };

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
   
  }
}
