import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileLayoutComponent } from './employee-profile-layout.component';

describe('EmployeeProfileLayoutComponent', () => {
  let component: EmployeeProfileLayoutComponent;
  let fixture: ComponentFixture<EmployeeProfileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfileLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
