import { TestBed } from '@angular/core/testing';

import { SCreateFresherService } from './s-create-fresher.service';

describe('SCreateFresherService', () => {
  let service: SCreateFresherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCreateFresherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
