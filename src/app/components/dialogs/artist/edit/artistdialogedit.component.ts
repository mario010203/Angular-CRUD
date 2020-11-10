import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Artistservice } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'artistedit',
  templateUrl: './artistdialogedit.component.html',
  styleUrls: ['./artistdialogedit.component.scss'],
})
export class ArtistDialogEditComponent implements OnInit {
  artists: any;
  formArtist: FormGroup;

  constructor(
    private artistService: Artistservice,
    private dialogRef: MatDialogRef<ArtistDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) { artists }: any
  ) {
    this.formArtist = new FormGroup({
      artistId: new FormControl(
        { value: artists._id, disabled: true },
        Validators.required
      ),
      name: new FormControl(artists.name, [Validators.required]),
      photoUrl: new FormControl(artists.photoUrl, [Validators.required]),
      birthdate: new FormControl(artists.birthdate, [Validators.required]),
      deathDate: new FormControl(artists.deathDate, [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    const data = this.formArtist.value;
    const id = this.formArtist.controls.artistId.value;

    this.artistService.editArtist(id, data).subscribe(
      (data) => {
        this.artists = data;
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
