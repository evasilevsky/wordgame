import { Injectable } from '@angular/core';
import { WordGridService } from './word-grid.service';
import { LaurenGridService } from './lauren-grid.service';
import { IBoardGenerator, ITile } from './word-grid/word-grid.models';

@Injectable({
  providedIn: 'root'
})
export class BoardService implements IBoardGenerator {

  constructor(private readonly DiegoGridService: WordGridService, 
    private readonly LaurenGridService: LaurenGridService) { 
  }

  generateBoard(): ITile[][] {
    return this.LaurenGridService.generateBoard();
  }
}