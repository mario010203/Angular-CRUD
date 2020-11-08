import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artistservice } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass'],
})

export class ArtistComponent implements OnInit {
  constructor(private artistService: Artistservice, private router: Router) {}

  ngOnInit(): void {}
}
