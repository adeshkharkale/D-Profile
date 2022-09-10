import { TestBed } from '@angular/core/testing';

import { SEventService } from './s-event.service';

describe('SEventService', () => {
  let service: SEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
