import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { WordGameComponent } from './word-game/word-game.component';

const routes: Routes = [
	{
		path: "", component: WordGameComponent
	},
	{
		path: 'settings', component: SettingsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
