import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExpertiseComponent } from './employee-expertise.component';

describe('EmployeeExpertiseComponent', () => {
  let component: EmployeeExpertiseComponent;
  let fixture: ComponentFixture<EmployeeExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
