import { Injectable } from '@angular/core';
import { WordGridService } from './word-grid.service';
import { IBoardGenerator, ITile } from './word-grid/word-grid.models';

@Injectable({
  providedIn: 'root'
})
export class BoardService implements IBoardGenerator{

  constructor(private readonly DiegoGridService: WordGridService) { 
  }
  generateBoard(gridSize: number, wordList: string[]): ITile[][] {
    return this.DiegoGridService.generateBoard(gridSize, wordList);
  }
}