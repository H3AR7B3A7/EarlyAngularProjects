import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { StillModule } from './still/still.module';

@NgModule({
  declarations: [
    AppComponent,
    SurgeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
