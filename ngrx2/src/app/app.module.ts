import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app.routing'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './reducers'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
