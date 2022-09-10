import { TestBed } from '@angular/core/testing';

import { STutorialService } from './s-tutorial.service';

describe('STutorialService', () => {
  let service: STutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
