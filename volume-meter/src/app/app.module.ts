import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VolumeMeterAltComponent, VolumeMeterComponent } from 'projects/nucleus-volume-meter/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VolumeMeterComponent,
    VolumeMeterAltComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
