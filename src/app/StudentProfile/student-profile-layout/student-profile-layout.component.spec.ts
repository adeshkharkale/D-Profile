import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileLayoutComponent } from './student-profile-layout.component';

describe('StudentProfileLayoutComponent', () => {
  let component: StudentProfileLayoutComponent;
  let fixture: ComponentFixture<StudentProfileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
