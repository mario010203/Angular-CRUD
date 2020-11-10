import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Artistservice } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'artistdialogcreate',
  templateUrl: './artistdialogcreate.component.html',
  styleUrls: ['./artistdialogcreate.component.scss'],
})
export class ArtistDialogCreateComponent implements OnInit {
  artists: any;
  formArtist: FormGroup;

  constructor(
    private artistService: Artistservice,
    private dialogRef: MatDialogRef<ArtistDialogCreateComponent>
  ) {
    this.formArtist = new FormGroup({
      name: new FormControl('', [Validators.required]),
      photoUrl: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      deathDate: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    const data = this.formArtist.value;
    console.log(data);
    this.artistService.createartist(data).subscribe(
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
