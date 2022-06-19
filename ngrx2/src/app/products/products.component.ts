import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { getProducts } from './state/product.reducer'
import { State } from './state/product.state'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$ = this.store.select(getProducts)

  constructor(private store: Store<State>) { }

  add() {
    this.store.dispatch({ type: '[Product] Add' })
  }

  remove() {
    this.store.dispatch({ type: '[Product] Remove' })
  }
}
