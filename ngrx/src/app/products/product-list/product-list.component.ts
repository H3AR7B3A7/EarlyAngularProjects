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

  displayCode: boolean

  products: Product[]

  // Used to highlight the selected product in the list
  selectedProduct: Product | null
  products$: Observable<Product[]>

  constructor(
    private store: Store<State>,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // TODO : Unsubscribe
    this.store.select(getCurrentProduct).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    )

    this.products$ = this.store.select(getProducts)

    this.store.dispatch(ProductActions.loadProducts())

    // TODO : Unsubscribe
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.displayCode = showProductCode
    )
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
