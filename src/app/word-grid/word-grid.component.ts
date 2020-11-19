import { Component, OnInit } from '@angular/core';
import { GRID_SIZE, WORD_LIST} from '../constants';
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
  wordList = WORD_LIST;

  constructor(private BoardService: BoardService) {
  }

  ngOnInit(): void {
    this.gameGrid = this.BoardService.generateBoard(GRID_SIZE, WORD_LIST);
    
  }  

  checkForWord($event): void {
    if($event.isWord) {
      if($event.letterPosition.length && this.word.length === $event.letterPosition[0]){
        this.word[$event.letterPosition[0]] = $event.letter;
      } else if ($event.letterPosition.length && this.word.length === $event.letterPosition[1]){
        this.word[$event.letterPosition[1]] = $event.letter;
      } else {
        this.word[$event.letterPosition] = $event.letter;
      }
      const wordToCheck: string = this.word.join('');
      for(let [i,word] of this.wordList.entries()) {
        if(wordToCheck === word ) {
          alert(`You caught a wild ${word}`);
          this.word = []
        }
      }
    }
  }
}
