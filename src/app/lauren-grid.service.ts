import { Injectable } from '@angular/core';
import { GRID_SIZE, DIRECTIONS2, WORD_LIST, WORD_LIST_TREES } from './constants';
import { IBoardGenerator, ILocation, ITile } from './word-grid/word-grid.models';

@Injectable({
	providedIn: 'root'
})

export class LaurenGridService implements IBoardGenerator {

	board: ITile[][];
	attempts = 0;

	settings = {
		gridSize: GRID_SIZE,
		maxAttempts: 1,
		overlap: true,
		reverse: true,
		directions: DIRECTIONS2,
		wordList: WORD_LIST_TREES
	}

	generateBoard(): ITile[][] {
		let unplacedWords;
		let board;
		do {
			board = this.createBaseGrid(this.settings.gridSize);
			unplacedWords = this.placeWordsOnBoard(this.settings.wordList, board);
			this.attempts++;
		} while (unplacedWords.length > 0 && this.attempts < this.settings.maxAttempts);
		return board;
	}
	createBaseGrid(gridSize: number): ITile[][] {
	  return [...Array(gridSize)].map((row,rowI) => [...Array(gridSize)].map((opt,colI) => this.createTile(rowI,colI)));
	}
	placeWordsOnBoard(wordList: string[], board: ITile[][]): string[] {
		return wordList.reduce((unplacedWordsList, word) => {
			return this.randomlyPositionWord(word,board) ? unplacedWordsList : unplacedWordsList.concat(word);
		},[]);
	}
	randomlyPositionWord(word: string, board: ITile[][]): boolean {
		const openSpots = this.getOpenSpots(board,word);
		if (openSpots.length > 0) {
			const randomSpot = openSpots[this.randomArrayIndex(openSpots)];
			this.updateBoardTiles(randomSpot.direction, randomSpot.indexRow,randomSpot.indexColumn,word,board);
			return true;
		}
		return false;
	}
	updateBoardTiles(direction, rowI: number, colI: number, word: string, board: ITile[][]): string {
		let letters = [...word];
		if (direction.reverse) {
			letters = letters.reverse();
		}
		letters.forEach((letter, index) => {
			const tile = this.getTileFromGrid(direction,rowI,colI,board,index);
			this.updateTile(tile,letter,word);
		})
		return word;
	}	
	updateTile(tile: ITile,val: string,word: string): ITile {
		tile.letter = this.formatLetter(val);
		tile.words.push(word);
		return tile;
	}
	createTile(rowI: number, colI: number): ITile {
		const tile = {
			indexRow:rowI,
			indexColumn: colI,
			letter: this.getRandomLetter(),
			isSelected: false,
			isWord:false,
			foundCount: 0,
			words:[],
		}
		return tile;
	}
	getTileFromGrid(direction, rowI: number, colI: number, board: ITile[][], position: number): ITile {
		if (direction.name === 'hor') {
			return board[rowI][colI + position];
		}
		if (direction.name === 'ver') {
			return board[rowI + position][colI];
		}
		if (direction.name === 'dia-l') {
			return board[rowI + position][colI + position];
		}
		if (direction.name === 'dia-r') {
			return board[rowI + position][colI - position];
		}
	}
	getOpenSpots(board: ITile[][], word: string): ILocation[] {
		const spots = [];
	 	board.forEach((row,rowI) => {
		 row.forEach((c,colI)=> {
			let spot = this.createSpot(rowI,colI,word,board);
			 if (spot) spots.push(spot);
		 })
	 })
	 return spots;
	}
	createSpot(rowI: number, colI: number, word: string, board: ITile[][]): ILocation {
		const direction = this.getRandomDirection(rowI,colI,word,board);
		if (direction) {
			return {
				indexRow: rowI,
				indexColumn: colI,
				direction: direction,
			}
		}
	}
	getRandomDirection(rowI: number, colI: number, word: string, board: ITile[][]) {
		const options = this.getPossibleDirections(word, this.settings.directions, board, rowI, colI);
		if (options) {
		 return	options[this.randomArrayIndex(options)];
		}
	}
	getPossibleDirections(word: string, directions: any[], board: ITile[][], rowI: number, colI: number): any[] { 
		const dirs = this.filterDirections(directions);
		return [...dirs].reduce((possibilities,dir) => {
			return this.isPossibility(dir,rowI,colI,word,board) ? possibilities.concat(dir) : possibilities; 
		},[]);
	}
	filterDirections(directions) {
	  let dirs = directions.filter(dir => dir.active);
		if (!this.settings.reverse) {
			dirs = dirs.filter(dir => !dir.reverse);
		}
		return dirs;
	}
  isPossibility(dir, rowI: number, colI: number, word: string, board: ITile[][]): boolean {
		const letters = dir.reverse ? [...word].reverse() : [...word];
		const fits = this.fitsGridSize(dir, rowI, colI, word);

		if (!fits) {
			return false;
		}
		return !this.hasTileConflicts(letters,dir,rowI,colI,board);
	}
	fitsGridSize(direction, rowI: number, colI: number, word: string): boolean {
		const fitsWidth = this.wordFitsGrid(colI,word);
		const fitsHeight = this.wordFitsGrid(rowI,word);

		if (direction.name === 'hor') {
			return fitsWidth;
		}
		if (direction.name === 'ver') {
			return fitsHeight;
		}
		if (direction.name === 'dia-l') {
			return fitsWidth && fitsHeight;
		}
		if (direction.name === 'dia-r') {
			return this.wordFitsFromRight(colI,word) && fitsHeight;
		}

	}
	hasTileConflicts(lettersToPlace: string[], dir: string, rowI: number, colI: number, board: ITile[][]): boolean { 
		const tilesOnBoard = lettersToPlace.map((l,i) => this.getTileFromGrid(dir,rowI,colI,board,i).letter);
		return tilesOnBoard.some((letterOnBoard,i) => this.isFilled(letterOnBoard, lettersToPlace[i]));
	}
	isFilled(val: string, letter: string = undefined): boolean {
		if (letter && this.settings.overlap) {
			if (val && val === letter.toUpperCase()) {
				return false;
			}
		}
	 return val === val.toUpperCase();
	}
	wordFitsGrid(point: number, word: string): boolean {
		return this.settings.gridSize - point >= word.length;
	}
	wordFitsFromRight(point: number, word: string) {
		return (point + 1) - word.length >= 0;
	}
	randomArrayIndex(array: any[]): number {
		const num = Math.floor(Math.random() * array.length);
		return num;
	}
	getRandomLetter(): string {
		const alphabet = "abcdefghijklmnopqrstuvwxyz";
		return alphabet[Math.floor(Math.random() * alphabet.length)];
	}
	formatLetter(val: string): string {
		return val.toUpperCase();
	}
}