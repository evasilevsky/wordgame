import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordGridComponent } from './word-grid/word-grid.component';
import { TileComponent } from './tile/tile.component';
import { WordGameComponent } from './word-game/word-game.component';
import { SettingsComponent } from './settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		WordGridComponent,
		TileComponent,
		WordGameComponent,
		SettingsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
