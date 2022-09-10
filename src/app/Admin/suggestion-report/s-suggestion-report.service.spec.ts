import { TestBed } from '@angular/core/testing';

import { SSuggestionReportService } from './s-suggestion-report.service';

describe('SSuggestionReportService', () => {
  let service: SSuggestionReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSuggestionReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
