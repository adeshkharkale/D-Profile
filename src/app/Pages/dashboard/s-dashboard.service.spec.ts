import { TestBed } from '@angular/core/testing';

import { SDashboardService } from './s-dashboard.service';

describe('SDashboardService', () => {
  let service: SDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
