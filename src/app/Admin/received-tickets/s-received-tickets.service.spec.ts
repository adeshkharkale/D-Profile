import { TestBed } from '@angular/core/testing';

import { SReceivedTicketsService } from './s-received-tickets.service';

describe('SReceivedTicketsService', () => {
  let service: SReceivedTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SReceivedTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
