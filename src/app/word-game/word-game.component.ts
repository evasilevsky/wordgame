import { Component, OnInit } from '@angular/core';
import { WORD_LIST, WORD_LIST_TREES } from '../constants';


@Component({
  selector: 'app-word-game',
  templateUrl: './word-game.component.html',
  styleUrls: ['./word-game.component.scss']
})

export class WordGameComponent implements OnInit {

  wordList = WORD_LIST_TREES;

  constructor() { }

  ngOnInit(): void {

  }

}
