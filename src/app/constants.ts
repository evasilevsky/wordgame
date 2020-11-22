import { IList } from './word-grid/word-grid.models';

// Const declaration
export const GRID_WIDTH: number = 20;
export const GRID_HEIGHT: number = 20;
export const GRID_SIZE: number = 20;
export const DIRECTIONS: string[] = [
  'horizontal',
  'vertical',
  'diagonal'
]
export const WORD_LIST: IList[] = [
  {word:'ditto', id: '132', completed:false},
  {word:'arbok', id: '24', completed:false},
  {word:'eevee', id: '133', completed:false},
  {word:'entei', id: '244', completed:false},
  {word:'gloom', id: '44', completed:false},
  {word:'ekans', id: '23', completed:false},
  {word:'pichu', id: '172', completed:false},
  {word:'psyduck', id: '54', completed:false},
  {word:'duduo', id: '84', completed:false},
  {word:'pikachu', id: '25', completed:false},
  {word:'bulbasaur', id: '1', completed:false},
  {word:'squirtle', id: '7', completed:false},
  {word:'charmander', id: '4', completed:false},
  {word:'charizard', id: '6', completed:false},
  {word:'muk', id: '89', completed:false},
  {word:'miltank', id: '241', completed:false},
  {word:'snorlax', id: '143', completed:false},
  {word:'mew', id: '151', completed:false},
  {word:'togepi', id: '175', completed:false},
  {word:'gyarados', id: '130', completed:false},
  {word:'clefairy', id: '35', completed:false},
  {word:'blastoise', id: '9', completed:false}
];

export const ALPHABET: string = 'abcdefghijklmnoprstuvwy'
