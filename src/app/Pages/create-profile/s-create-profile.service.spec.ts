import { TestBed } from '@angular/core/testing';

import { SCreateProfileService } from './s-create-profile.service';

describe('SCreateProfileService', () => {
  let service: SCreateProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCreateProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
