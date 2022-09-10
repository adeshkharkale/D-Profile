import { TestBed } from '@angular/core/testing';

import { SActiveUsersService } from './s-active-users.service';

describe('SActiveUsersService', () => {
  let service: SActiveUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SActiveUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
