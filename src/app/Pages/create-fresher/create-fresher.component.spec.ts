import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFresherComponent } from './create-fresher.component';

describe('CreateFresherComponent', () => {
  let component: CreateFresherComponent;
  let fixture: ComponentFixture<CreateFresherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFresherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
