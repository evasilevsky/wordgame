import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WORD_LIST, WORD_LIST_TREES } from '../constants';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})
export class WordlistComponent implements OnInit {

  @Input() wordLists: any[]
  @Output() notifySelection = new EventEmitter()




  constructor() { }

  ngOnInit(): void {
  }

  // wordListChange(wordList) {
  //   //this.wordList = wordList.list;
  //   console.log('test');
  // }

}
