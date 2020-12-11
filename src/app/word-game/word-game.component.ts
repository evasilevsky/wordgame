import { Component, OnInit } from '@angular/core';
import { WORD_LIST, WORD_LIST_TREES } from '../constants';


@Component({
  selector: 'app-word-game',
  templateUrl: './word-game.component.html',
  styleUrls: ['./word-game.component.scss']
})

export class WordGameComponent implements OnInit {

  wordList = [];
  wordLists = [
    { name: 'trees', list: WORD_LIST_TREES },
    { name: 'pokemon', list: WORD_LIST }
  ]

  constructor() {
    this.wordList = this.wordLists[0].list;
  }

  ngOnInit(): void {

  }

  wordListChange(wordList) {
    this.wordList = wordList.list;
  }

}
