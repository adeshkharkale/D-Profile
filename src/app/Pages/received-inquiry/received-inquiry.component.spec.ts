import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedInquiryComponent } from './received-inquiry.component';

describe('ReceivedInquiryComponent', () => {
  let component: ReceivedInquiryComponent;
  let fixture: ComponentFixture<ReceivedInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedInquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
