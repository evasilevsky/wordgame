import { Component, OnInit } from '@angular/core';
import { GRID_SIZE, WORD_LIST } from '../constants';
import { BoardService } from '../board.service';
import { IBoardGenerator, ITile } from './word-grid.models'

@Component({
	selector: 'app-word-grid',
	templateUrl: './word-grid.component.html',
	styleUrls: ['./word-grid.component.scss']
})

export class WordGridComponent implements OnInit {
	gameGrid: ITile[][];
 

  constructor(private BoardService: BoardService) {
  }

  ngOnInit(): void {
    this.gameGrid = this.BoardService.generateBoard(GRID_SIZE, WORD_LIST);
  }  
}
