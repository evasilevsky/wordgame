import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ISettings, StorageService, Theme } from '../services/storage.service';

export interface IOption {
	label: string;
	value: number;
}

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	options: IOption[] = [
		{
			label: Theme[Theme.Light],
			value: Theme.Light
		}, {
			label: Theme[Theme.Dark],
			value: Theme.Dark
		}]

	rows = new FormControl(10, [Validators.required, Validators.min(5)]);
	cols = new FormControl(10, [Validators.required, Validators.min(5)]);
	settingsForm = this.fb.group({
		theme: Theme.Light,
		rows: this.rows,
		cols: this.cols,
		clues: new FormControl(false)
	})
	constructor(
		private readonly fb: FormBuilder,
		private readonly _storageService: StorageService
	) { }

	ngOnInit(): void {
	}

	public get theme() {
		return this.settingsForm.controls.theme;
	}

	changeTheme(event) {
		this.theme.setValue(event.target.value)
	}

	submit() {
		if (this.settingsForm.invalid) {
			return;
		}
		const theme = this.settingsForm.controls.theme.value;
		const rows = this.rows.value;
		const cols = this.cols.value;
		const clues = this.settingsForm.controls.clues.value;
		const settings: ISettings = {
			theme,
			rows,
			cols,
			clues
		}
		this._storageService.saveSettings(settings);
	}
}
