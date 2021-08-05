import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { ProductData } from './products/product-data'
import { AppComponent } from './app.component'
import { WelcomeComponent } from './home/welcome.component'
import { PageNotFoundComponent } from './page-not-found.component'
import { UserModule } from './user/user.module'
import { MessageModule } from './messages/message.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
