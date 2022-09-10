import { TestBed } from '@angular/core/testing';

import { SUserDataService } from './s-user-data.service';

describe('SUserDataService', () => {
  let service: SUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
