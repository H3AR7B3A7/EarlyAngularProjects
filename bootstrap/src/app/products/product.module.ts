import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductsComponent } from './products.component'
import { ProductDetailComponent } from './product-detail.component'
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe'
import { StarsComponent } from '../shared/stars.component'
import { RatingModule } from 'ng-starrating'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ProductDetailGuard } from './product-detail.guard'

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ])
  ]
})
export class ProductModule { }
