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
    return this.http.get(`${baseUrl}/${albumsConfig.allAlbumsurl}`);
  }

  getAlbumdetail(id): Observable<any> {
    return this.http.get(`${baseUrl}/${albumsConfig.albumId}`);
  }

  editAlbum(id, album): Observable<any> {
    return this.http.put(`${baseUrl}/${albumsConfig.albumEdit}`, album);
  }

  deleteAlbum(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${albumsConfig.albumDelete}`);
  }

  createAlbum(album): Observable<any> {
    return this.http.post(`${baseUrl}/${albumsConfig.albumCreate}`, album);
  }

  bulkCreatealbums(album): Observable<any> {
    return this.http.post(`${baseUrl}/${albumsConfig.albumsBulkcreate}`, album);
  }
}
