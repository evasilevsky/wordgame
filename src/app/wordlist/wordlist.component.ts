import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
interface IWordList {
  name: string,
  list: any[],
}
@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})

export class WordlistComponent implements OnInit {

  @Input() wordLists: IWordList[];
  @Output() change = new EventEmitter<IWordList>();


  constructor() { }

  ngOnInit(): void {
  }

  toggle(wordList:IWordList) {
    this.change.emit(wordList);
  }

}
