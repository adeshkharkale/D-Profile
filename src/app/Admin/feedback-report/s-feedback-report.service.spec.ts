import { TestBed } from '@angular/core/testing';

import { SFeedbackReportService } from './s-feedback-report.service';

describe('SFeedbackReportService', () => {
  let service: SFeedbackReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFeedbackReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
