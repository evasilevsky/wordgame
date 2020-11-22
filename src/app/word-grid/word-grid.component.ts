import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BoardService } from '../board.service';
import { ITile } from './word-grid.models'
import { TileComponent } from '../tile/tile.component';

@Component({
	selector: 'app-word-grid',
	templateUrl: './word-grid.component.html',
	styleUrls: ['./word-grid.component.scss']
})

export class WordGridComponent implements OnInit {
  gameGrid: ITile[][];
  @ViewChildren(TileComponent) tiles: QueryList<TileComponent>;

  constructor(private BoardService: BoardService) { }

  ngOnInit(): void {
    this.gameGrid = this.BoardService.generateBoard();
  } 
  ngAfterViewInit() { }

  selectedChanged(eTile:ITile) {
    const isWordTile = eTile.words.length > 0;
    this.toggleTileSelected(eTile);
    if (isWordTile && !eTile.isWord) {
      eTile.words.forEach((word) => this.checkForFoundWords(word));
    }
  }
  toggleTileSelected(tile:ITile) {
    if (!tile.isWord) {
      tile.isSelected = !tile.isSelected;
    }
  }
  checkForFoundWords(word:string) {
    const relatedTiles = this.getRelatedTiles(word);
    const wordIsFound = relatedTiles.length === word.length;
    if (wordIsFound) {
      this.updateRelatedTiles(relatedTiles);
    }
  }
  getRelatedTiles(word:string) { 
    return this.tiles.filter(child => child.tile.words
      .some(currentWord => currentWord === word))
      .filter(item => item.tile.isSelected === true);
  }
  updateRelatedTiles(relatedTiles: TileComponent[]) {
    relatedTiles.forEach((item,i)=> {
      const tile = item.tile;
      const allRelatedWordsFound = tile.foundCount === tile.words.length;
      tile.isWord = true;
      tile.isSelected = true;
      tile.foundCount++;
      if (allRelatedWordsFound) {
        tile.isSelected = false;
      }
    })
  }
}

