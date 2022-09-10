import { TestBed } from '@angular/core/testing';

import { SCreateExperiencedService } from './s-create-experienced.service';

describe('SCreateExperiencedService', () => {
  let service: SCreateExperiencedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCreateExperiencedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
