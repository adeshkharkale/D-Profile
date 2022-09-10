import { TestBed } from '@angular/core/testing';

import { SSuggestionService } from './s-suggestion.service';

describe('SSuggestionService', () => {
  let service: SSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
