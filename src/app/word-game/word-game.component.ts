import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WORD_LIST, WORD_LIST_TREES } from '../constants';
import { IWordListGroups, ThirdPartyService } from '../services/third-party/third-party.service';


@Component({
	selector: 'app-word-game',
	templateUrl: './word-game.component.html',
	styleUrls: ['./word-game.component.scss']
})

export class WordGameComponent implements OnInit, OnDestroy {

	wordList = WORD_LIST_TREES;

	wordListGroups: IWordListGroups;
	subs: Subscription[] = [];

	constructor(private readonly thirdPartyService: ThirdPartyService) { }

	ngOnInit(): void {
		const sub = this.thirdPartyService.generateWords()
			.pipe(
				take(1)
			)
			.subscribe(wordListGroups => this.wordListGroups);
		this.subs.push(sub);
	}

	ngOnDestroy(): void {
		this.subs.forEach(sub => sub.unsubscribe())
	}
}
