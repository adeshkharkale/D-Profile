import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExpertiseComponent } from './student-expertise.component';

describe('StudentExpertiseComponent', () => {
  let component: StudentExpertiseComponent;
  let fixture: ComponentFixture<StudentExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
