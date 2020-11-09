import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toArtists = function () {
    this.router.navigate(['/artists']);
  };
  toAlbums = function () {
    this.router.navigate(['/albums']);
  };

}
