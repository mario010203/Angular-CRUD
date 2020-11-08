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
    return this.http.get(`${baseUrl}/${artistsConfig.allArtistsurl}`);
  }

  getArtistdetail(id): Observable<any> {
    return this.http.get(`${baseUrl}/${artistsConfig.artistId}`);
  }

  editArtist(id, artist): Observable<any> {
    return this.http.put(`${baseUrl}/${artistsConfig.artistEdit}`, artist);
  }

  deleteArtist(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${artistsConfig.artistDelete}`);
  }

  createartist(artist): Observable<any> {
    return this.http.post(`${baseUrl}/${artistsConfig.artistCreate}`, artist);
  }

  bulkCreateartists(artist): Observable<any> {
    return this.http.post(`${baseUrl}/${artistsConfig.artistsBulkcreate}`, artist);
  }
}