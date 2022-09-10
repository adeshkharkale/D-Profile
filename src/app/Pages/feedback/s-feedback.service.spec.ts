import { TestBed } from '@angular/core/testing';

import { SFeedbackService } from './s-feedback.service';

describe('SFeedbackService', () => {
  let service: SFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
