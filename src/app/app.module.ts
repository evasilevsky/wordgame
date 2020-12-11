import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordGridComponent } from './word-grid/word-grid.component';
import { TileComponent } from './tile/tile.component';
import { WordGameComponent } from './word-game/word-game.component';
import { WordlistComponent } from './wordlist/wordlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WordGridComponent,
    TileComponent,
    WordGameComponent,
    WordlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
