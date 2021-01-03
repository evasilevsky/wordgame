import { TestBed } from '@angular/core/testing';

import { ThirdPartyWordService } from './third-party-word.service';

describe('ThirdPartyWordService', () => {
  let service: ThirdPartyWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdPartyWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
