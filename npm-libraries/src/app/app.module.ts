import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinAnythingModule } from '@h3ar7b3a7/spin-anything';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SpinAnythingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
