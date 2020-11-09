import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Artistservice } from 'src/app/services/artist/artist.service';

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
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router
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
}
