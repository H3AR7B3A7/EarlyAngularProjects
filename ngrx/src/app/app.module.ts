import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { ProductData } from './products/product-data'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShellComponent } from './home/shell.component'
import { MenuComponent } from './home/menu.component'
import { WelcomeComponent } from './home/welcome.component'
import { PageNotFoundComponent } from './home/page-not-found.component'
import { UserModule } from './user/user.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    UserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ name: 'ACME Demo App DevTools', maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
