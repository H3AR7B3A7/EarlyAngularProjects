import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RatingModule } from 'ng-starrating'

import { AppComponent } from './app.component'
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipe } from './products/convert-to-spaces.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
