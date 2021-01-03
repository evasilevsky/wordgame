import { Injectable } from '@angular/core';
import { IWordList } from './third-party.service';

@Injectable({
	providedIn: 'root'
})
export abstract class ThirdPartyWordService {

	constructor() { }

	abstract getWords(): IWordList;
}
