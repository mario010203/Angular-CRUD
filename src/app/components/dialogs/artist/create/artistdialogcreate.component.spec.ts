import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDialogCreate } from './artistdialogcreate.component';

describe('CoursedialogcreateComponent', () => {
  let component: ArtistDialogCreate;
  let fixture: ComponentFixture<ArtistDialogCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDialogCreate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDialogCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
