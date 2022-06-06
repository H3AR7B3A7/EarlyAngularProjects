import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinAnythingComponent, SpinAnythingModule } from 'projects/spin-anything/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpinAnythingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
