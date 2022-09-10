import { TestBed } from '@angular/core/testing';

import { SAdminHomeService } from './s-admin-home.service';

describe('SAdminHomeService', () => {
  let service: SAdminHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAdminHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
