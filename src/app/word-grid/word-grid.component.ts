import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { ITile } from './word-grid.models'
@Component({
	selector: 'app-word-grid',
	templateUrl: './word-grid.component.html',
	styleUrls: ['./word-grid.component.scss']
})

export class WordGridComponent implements OnInit {
  @Input() wordList;
  gameGrid: ITile[][];

  constructor(private BoardService: BoardService) { }

  ngOnInit(): void {
    this.gameGrid = this.BoardService.generateBoard(this.wordList);
  } 
  ngAfterViewInit() { }

  selectedChanged(tile:ITile): void {
    if (tile.isWord) {
      tile.words.forEach((word) => this.checkForFoundWords(word));
    }
  }
  checkForFoundWords(word: string): void {
    const relatedTiles = this.getWordTiles(word);
    const wordIsFound = relatedTiles.length === word.length;
    if (wordIsFound) {
      this.updateWordTiles(relatedTiles);
    }
  }
  getWordTiles(word: string): ITile[] {
    return this.gameGrid.flatMap(row => row.filter(tile => this.isPartOfWord(tile,word))); 
  }
  isPartOfWord(tile: ITile, word: string): boolean {
    return tile.isWord && tile.isSelected && tile.words.some(w => w === word);
  }
  updateWordTiles(wordTiles): void {
    wordTiles.forEach(tile => {
      tile.isSelected = true;
      tile.isFound = true;
      tile.foundCount++;
      if (tile.foundCount === tile.words.length) {
        tile.isSelected = false;
      }
    });
  }
}

