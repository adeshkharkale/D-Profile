import { TestBed } from '@angular/core/testing';

import { SSideMenuService } from './s-side-menu.service';

describe('SSideMenuService', () => {
  let service: SSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
