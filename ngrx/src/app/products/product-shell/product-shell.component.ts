import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Product } from '../product'
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state'
import * as ProductActions from '../state/product.actions'

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {

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

  showProductCodeChanged(): void {
    this.store.dispatch(
      ProductActions.toggleProductCode()
    )
  }

  initializeNewProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct())
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ productId: product.id }))
  }
}
