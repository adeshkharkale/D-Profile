import { TestBed } from '@angular/core/testing';

import { SSellReportService } from './s-sell-report.service';

describe('SSellReportService', () => {
  let service: SSellReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSellReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
