import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDialogEditComponent } from './albumdialogedit.component';

describe('CoursedialogComponent', () => {
  let component: AlbumDialogEditComponent;
  let fixture: ComponentFixture<AlbumDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDialogEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
