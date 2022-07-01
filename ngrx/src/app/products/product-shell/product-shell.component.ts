import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Product } from '../product'
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state'
import { ProductPageActions } from '../state/actions'

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
    this.store.dispatch(ProductPageActions.loadProducts())
    this.showProductCode$ = this.store.select(getShowProductCode)
  }

  showProductCodeChanged(): void {
    this.store.dispatch(
      ProductPageActions.toggleProductCode()
    )
  }

  initializeNewProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct())
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductPageActions.setCurrentProduct({ productId: product.id }))
  }
}
