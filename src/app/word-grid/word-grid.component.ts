import { Component, OnInit } from '@angular/core';
import { EricsBoardGenerator } from './word-grid.models';

@Component({
	selector: 'app-word-grid',
	templateUrl: './word-grid.component.html',
	styleUrls: ['./word-grid.component.scss']
})

export class WordGridComponent implements OnInit {

	gridSize = 15;
	gridData = [];

	constructor() {
		this.gridData = this.generateGridData(this.gridSize, this.getRandomLetter);
	}

	ngOnInit(): void {
		const my = new EricsBoardGenerator();
		this.gridData = my.generateBoard(this.gridSize, this.wordList);
	}

	generateGridData(gridSize, createOption) {
		return [...Array(gridSize)].map(row => [...Array(gridSize)].map(opt => createOption()));
	}

	getRandomLetter() {
		const alphabet = "abcdefghijklmnopqrstuvwxyz";
		return alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	selectItem($event) {
		const item = $event.target.closest('.word-grid__item');
		if (item) {
			if ($event.type === 'click' || $event.key === 'Enter') {
				const isSelected = item.classList.contains('selected');
				item.setAttribute('aria-selected', !isSelected);
				item.classList.toggle('selected');
			}
		}
	}
	handleKeyFocus($event) {
		const row = $event.target.parentElement;
		const rowIndex = row.getAttribute('data-index');
		const item = $event.target.closest('.word-grid__item');
		const nextTile = item.nextElementSibling;
		const prevTile = item.previousElementSibling;

		if (item) {
			if ($event.key === 'ArrowLeft') {
				if (prevTile) {
					prevTile.focus();
				} else if (rowIndex > 0) {
					row.previousElementSibling.lastElementChild.focus();
				}
			}
			if ($event.key === 'ArrowRight') {
				if (nextTile) {
					nextTile.focus();
				} else if (rowIndex < this.gridSize - 1) {
					row.nextElementSibling.firstElementChild.focus();
				}
			}
		}
	}
}
