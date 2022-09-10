import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExperincedComponent } from './create-experinced.component';

describe('CreateExperincedComponent', () => {
  let component: CreateExperincedComponent;
  let fixture: ComponentFixture<CreateExperincedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExperincedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExperincedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
