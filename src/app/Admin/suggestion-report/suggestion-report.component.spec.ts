import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionReportComponent } from './suggestion-report.component';

describe('SuggestionReportComponent', () => {
  let component: SuggestionReportComponent;
  let fixture: ComponentFixture<SuggestionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
