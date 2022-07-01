import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Product } from '../product'
import { ProductService } from '../product.service'
import { getCurrentProduct, getProducts, getShowProductCode, State } from '../state/product.reducer'

import * as ProductActions from '../state/product.actions'
import { Observable } from 'rxjs'

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products'
  errorMessage: string

  products$: Observable<Product[]>
  selectedProduct$: Observable<Product>
  showProductCode$: Observable<boolean>

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(getCurrentProduct)
    this.products$ = this.store.select(getProducts)
    this.store.dispatch(ProductActions.loadProducts())
    this.showProductCode$ = this.store.select(getShowProductCode)
  }

  checkChanged(): void {
    // this.displayCode = !this.displayCode
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
