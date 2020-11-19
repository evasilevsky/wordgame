import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITile } from '../word-grid/word-grid.models';

@Component({
	selector: 'app-tile',
	templateUrl: './tile.component.html',
	styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
	@Input()
	tile: ITile;

	@Output()
	onTileSelected = new EventEmitter<ITile>();
	constructor() { }

	ngOnInit(): void {
	}
	toggle() {
		if (this.tile.isSelected && typeof this.tile.letterPosition !== 'number') {
			this.tile.isSelected = this.tile.isSelected;
		} else {
			this.tile.isSelected = !this.tile.isSelected;
		}
		this.onTileSelected.emit(this.tile);
	}
}
