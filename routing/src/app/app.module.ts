import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentModule } from './parent/parent.module';
import { LoginComponent } from './login/login.component';
import { MyLoggerModule } from 'my-logger';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule,
    MyLoggerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
