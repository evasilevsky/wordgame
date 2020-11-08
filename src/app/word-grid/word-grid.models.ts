export interface IBoardGenerator {
	generateBoard(gridSize: number, wordList: string[]): ITile[][];
}

export interface ITile {
	letter: string;
	isSelected: boolean;
}
