import { TestBed } from '@angular/core/testing';

import { SRegisteredUsersService } from './s-registered-users.service';

describe('SRegisteredUsersService', () => {
  let service: SRegisteredUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRegisteredUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
