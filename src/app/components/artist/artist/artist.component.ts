import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artistservice } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  displayedColumns = ['name', 'photo-link', 'birthdate', 'deathdate']
  artists: any;


  constructor(private artistService: Artistservice, private router: Router) {}

  ngOnInit(): void {
    this.getAllArtist();
  }

  async getAllArtist(): Promise <void> {
    
    this.artistService.getArtists().subscribe(
      data => {
        this.artists = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
