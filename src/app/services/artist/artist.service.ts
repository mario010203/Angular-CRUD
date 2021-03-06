import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl, artistsConfig } from '../config';

@Injectable({
  providedIn: 'root',
})
export class Artistservice {
  constructor(private http: HttpClient) {}

  getArtists(): Observable<any> {
    return this.http.get(`${baseUrl}${artistsConfig.allArtistsurl}`);
  }

  editArtist(id, artist) {
    return this.http.put(`${baseUrl}${artistsConfig.artistEdit}${id}`, artist);
  }

  deleteArtist(id) {
    return this.http.delete(`${baseUrl}${artistsConfig.artistDelete}${id}`);
  }

  createartist(artist) {
    return this.http.post(`${baseUrl}${artistsConfig.artistCreate}`, artist);
  }
}
