import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Product } from '../product'
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/product.reducer'

import * as ProductActions from '../state/product.actions'

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products'

  products$: Observable<Product[]>
  selectedProduct$: Observable<Product>
  showProductCode$: Observable<boolean>
  errorMessage$: Observable<string>

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(getCurrentProduct)
    this.products$ = this.store.select(getProducts)
    this.errorMessage$ = this.store.select(getError)
    this.store.dispatch(ProductActions.loadProducts())
    this.showProductCode$ = this.store.select(getShowProductCode)
  }

  checkChanged(): void {
    this.store.dispatch(
      ProductActions.toggleProductCode()
    )
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct())
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ product }))
  }
}
