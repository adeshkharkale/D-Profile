import { TestBed } from '@angular/core/testing';

import { SEmployeeProfileService } from './s-employee-profile.service';

describe('SEmployeeProfileService', () => {
  let service: SEmployeeProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEmployeeProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
