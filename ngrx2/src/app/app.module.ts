import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDatabase } from './fake-database/fake-database.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDatabase, {
      delay: 2000
    }),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
