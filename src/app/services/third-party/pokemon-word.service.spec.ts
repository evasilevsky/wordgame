import { TestBed } from '@angular/core/testing';

import { PokemonWordService } from './pokemon-word.service';

describe('PokemonWordService', () => {
  let service: PokemonWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
