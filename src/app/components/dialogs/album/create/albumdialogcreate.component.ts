import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Albumservice } from 'src/app/services/album/album.service';

@Component({
  selector: 'albumdialogcreate',
  templateUrl: './albumdialogcreate.component.html',
  styleUrls: ['./albumdialogcreate.component.scss'],
})
export class AlbumDialogCreateComponent implements OnInit {
  albums: any;
  formAlbum: FormGroup;

  constructor(
    private albumService: Albumservice,
    private dialogRef: MatDialogRef<AlbumDialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) { artist }
  ) {
    this.formAlbum = new FormGroup({
      artistId: new FormControl(artist, [Validators.required]),
      title: new FormControl('', [Validators.required]),
      coverUrl: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    const data = this.formAlbum.value;
    this.albumService.createAlbum(data).subscribe(
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
