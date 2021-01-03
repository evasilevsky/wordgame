import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThirdPartyWordService } from './third-party-word.service';
import { IWordList } from './third-party.service';

@Injectable({
	providedIn: 'root'
})
export class PokemonWordService implements ThirdPartyWordService {

	constructor(
		private readonly httpService: HttpClient
	) { }
	getWords(): Observable<IWordList> {
		return this.httpService.get("asdf")
			.pipe(
				catchError()
				map(),
			);
	}
}
