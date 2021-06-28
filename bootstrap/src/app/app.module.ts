import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RatingModule } from 'ng-starrating'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarsComponent } from './shared/stars.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { RouterModule } from '@angular/router'
import { ProductDetailGuard } from './products/product-detail.guard'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarsComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
