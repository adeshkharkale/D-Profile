import { TestBed } from '@angular/core/testing';

import { SContactDetailsService } from './s-contact-details.service';

describe('SContactDetailsService', () => {
  let service: SContactDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SContactDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
