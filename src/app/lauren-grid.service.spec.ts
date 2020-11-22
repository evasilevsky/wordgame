import { TestBed } from '@angular/core/testing';

import { LaurenGridService } from './lauren-grid.service';

describe('LaurenGridService', () => {
  let service: LaurenGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaurenGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
