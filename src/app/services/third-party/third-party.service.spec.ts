import { TestBed } from '@angular/core/testing';

import { ThirdPartyService } from './third-party.service';

describe('ThirdPartyService', () => {
  let service: ThirdPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
