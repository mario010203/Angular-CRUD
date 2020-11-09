import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl, albumsConfig } from '../config';

@Injectable({
  providedIn: 'root',
})
export class Albumservice {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get(`${baseUrl}${albumsConfig.allAlbumsurl}`);
  }

  editAlbum(id, album) {
    return this.http.put(`${baseUrl}${albumsConfig.albumEdit}${id}`, album);
  }

  deleteAlbum(id) {
    return this.http.delete(`${baseUrl}${albumsConfig.albumDelete}${id}`);
  }

  createAlbum(album) {
    return this.http.post(`${baseUrl}${albumsConfig.albumCreate}`, album);
  }
}
