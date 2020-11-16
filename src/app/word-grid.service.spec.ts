import { TestBed } from '@angular/core/testing';

import { WordGridService } from './word-grid.service';

describe('WordGridService', () => {
  let service: WordGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
