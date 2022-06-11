import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinAnythingModule } from 'spin-anything';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SpinAnythingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
