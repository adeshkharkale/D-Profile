import { TestBed } from '@angular/core/testing';

import { SHelpService } from './s-help.service';

describe('SHelpService', () => {
  let service: SHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
