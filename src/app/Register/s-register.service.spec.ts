import { TestBed } from '@angular/core/testing';

import { SRegisterService } from './s-register.service';

describe('SRegisterService', () => {
  let service: SRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
