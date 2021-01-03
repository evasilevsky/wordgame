import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { PokemonWordService } from './pokemon-word.service';

export interface IWordListGroups {
	wordLists: IWordList[];
}

export interface IWordList {
	name: string;
	words: string[];
}

@Injectable({
	providedIn: 'root'
})
export class ThirdPartyService {

	constructor(
		private readonly pokemonWordService: PokemonWordService,
		private readonly catWordService: CatWordService
	) { }

	generateWords(): Observable<IWordListGroups> {
		const pokemonWordList$ = this.pokemonWordService.getWords();
		const catWordList$ = this.catWordService.getWords();
		return forkJoin([pokemonWordList$, catWordList$])
			.pipe(
				map(([pokemonWordList, catWordList]) => {
					return {
						wordLists: [pokemonWordList$, catWordList];
					};
				})
			)
	}
}
