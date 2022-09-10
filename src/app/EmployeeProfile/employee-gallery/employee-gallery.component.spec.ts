import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGalleryComponent } from './employee-gallery.component';

describe('EmployeeGalleryComponent', () => {
  let component: EmployeeGalleryComponent;
  let fixture: ComponentFixture<EmployeeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
