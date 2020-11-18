import { Component, OnInit } from '@angular/core';
import { GRID_SIZE, WORD_LIST, WORD_LIST_2} from '../constants';
import { BoardService } from '../board.service';
import { IBoardGenerator, ITile } from './word-grid.models'

@Component({
	selector: 'app-word-grid',
	templateUrl: './word-grid.component.html',
	styleUrls: ['./word-grid.component.scss']
})

export class WordGridComponent implements OnInit {
	gameGrid: ITile[][];
  word: string[] = [];
  wordList = WORD_LIST_2;

  constructor(private BoardService: BoardService) {
  }

  ngOnInit(): void {
    this.gameGrid = this.BoardService.generateBoard(GRID_SIZE, WORD_LIST);
    
  }  

  checkForWord($event): void {
    if($event.isWord && $event.isStartOrEnd === 'start') {
      this.word.push($event.letter);

    } else if($event.isWord && $event.isStartOrEnd === 'middle') {
      this.word.push($event.letter);

    } else if($event.isWord && $event.isStartOrEnd === 'end') {
      this.word.push($event.letter);

      const wordToCheck: string = this.word.join('');

      for(let [i,word] of this.wordList.entries()) {
        if(wordToCheck === word ) {
          console.log(`You caught a wild ${word}`);
          this.word = [];
        } else {
          // console.log('try again');
        }
      }
    }
    
  }
}
