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
<<<<<<< HEAD
    {name:'trees', list: WORD_LIST_TREES},
    {name:'pokemon', list: WORD_LIST}
  ]

  constructor() { 
=======
    { name: 'trees', list: WORD_LIST_TREES },
    { name: 'pokemon', list: WORD_LIST }
  ]

  constructor() {
>>>>>>> 048e85a9f37149cda0d5b96afeeaafb1ae36f4c4
    this.wordList = this.wordLists[0].list;
  }

  ngOnInit(): void {
   
  }

  wordListChange(wordList) {
    this.wordList = wordList.list;
  }

  wordListChange(wordList) {
    this.wordList = wordList.list;
  }

}
