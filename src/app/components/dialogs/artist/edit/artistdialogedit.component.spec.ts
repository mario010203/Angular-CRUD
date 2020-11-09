import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDialogEditComponent } from './artistdialogedit.component';

describe('CoursedialogComponent', () => {
  let component: ArtistDialogEditComponent;
  let fixture: ComponentFixture<ArtistDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDialogEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
