export interface IBoardGenerator {
	generateBoard(wordList?: string[]): ITile[][];
}
export interface ITile {
  letter?: string;
  words?: string[];
  indexRow?: number;
  indexColumn?: number;
  isSelected?: boolean;
  isWord?: boolean;
  isFound?: boolean;
  foundCount? :number;
}

export interface ILocation {
  indexRow: number;
  indexColumn: number;
  direction?: string;
}
