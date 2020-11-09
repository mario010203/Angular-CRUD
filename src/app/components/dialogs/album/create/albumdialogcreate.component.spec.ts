import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDialogCreateComponent } from './albumdialogcreate.component';

describe('CoursedialogcreateComponent', () => {
  let component: AlbumDialogCreateComponent;
  let fixture: ComponentFixture<AlbumDialogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDialogCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
