import { TestBed } from '@angular/core/testing';

import { SPaymentDetailsService } from './s-payment-details.service';

describe('SPaymentDetailsService', () => {
  let service: SPaymentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPaymentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
