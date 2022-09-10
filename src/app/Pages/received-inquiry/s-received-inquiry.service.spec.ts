import { TestBed } from '@angular/core/testing';

import { SReceivedInquiryService } from './s-received-inquiry.service';

describe('SReceivedInquiryService', () => {
  let service: SReceivedInquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SReceivedInquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
