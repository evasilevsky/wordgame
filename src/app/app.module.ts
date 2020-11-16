import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordGridComponent } from './word-grid/word-grid.component';
import { TileComponent } from './tile/tile.component';
import { BasicTileComponent } from './tile/basic-tile/basic-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    WordGridComponent,
    TileComponent,
    BasicTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
