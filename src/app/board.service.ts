import { Injectable } from '@angular/core';
import { WordGridService } from './word-grid.service';
import { IBoardGenerator, IList, ITile } from './word-grid/word-grid.models';

@Injectable({
  providedIn: 'root'
})
export class BoardService implements IBoardGenerator{

  constructor(private readonly DiegoGridService: WordGridService) { 
  }
  generateBoard(gridSize: number, wordList: IList[]): ITile[][] {
    return this.DiegoGridService.generateBoard(gridSize, wordList);
  }
}