import { NgModule } from '@angular/core'

import { ProductsComponent } from './products.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { reducers } from './reducers'

const productRoutes: Routes = [
  { path: '', component: ProductsComponent }
]

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', reducers),

  ]
})
export class ProductsModule { }
