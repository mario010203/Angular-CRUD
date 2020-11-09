import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Albumservice } from 'src/app/services/album/album.service';

@Component({
  selector: 'albumdialogedit',
  templateUrl: './albumdialogedit.component.html',
  styleUrls: ['./albumdialogedit.component.scss'],
})
export class AlbumDialogEditComponent implements OnInit {
  albums: any;
  formAlbum: FormGroup;

  constructor(
    private albumService: Albumservice,
    private dialogRef: MatDialogRef<AlbumDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) { albums }: any
  ) {
    this.formAlbum = new FormGroup({
      albumId: new FormControl(
        { value: albums._id, disabled: true },
        Validators.required
      ),
      title: new FormControl(albums.title, [Validators.required]),
      coverUrl: new FormControl(albums.coverUrl, [Validators.required]),
      year: new FormControl(albums.year, [Validators.required]),
      genre: new FormControl(albums.genre, [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    const data = this.formAlbum.value;
    const id = this.formAlbum.controls.albumId.value;

    this.albumService.editAlbum(id, data).subscribe(
      (data) => {
        this.albums = data;
        this.dialogRef.close();
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
