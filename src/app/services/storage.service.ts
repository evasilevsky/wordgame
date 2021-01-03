import { Injectable } from '@angular/core';

export interface ISettings {
	theme: Theme;
	rows: number;
	cols: number;
	clues: boolean;
}

export enum Theme {
	Light,
	Dark
}

export enum LocalStorageKeys {
	Settings = "settings"
}

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor() { }

	saveSettings(settings: ISettings) {
		localStorage.setItem(LocalStorageKeys.Settings, JSON.stringify(settings));
	}
}
