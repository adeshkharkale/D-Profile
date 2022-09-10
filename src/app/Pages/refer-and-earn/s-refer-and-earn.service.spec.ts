import { TestBed } from '@angular/core/testing';

import { SReferAndEarnService } from './s-refer-and-earn.service';

describe('SReferAndEarnService', () => {
  let service: SReferAndEarnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SReferAndEarnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
