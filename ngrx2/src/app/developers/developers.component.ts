import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { State } from '../products/reducers'
import { getDevelopers } from './reducers/developer.reducer'

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent {

  developers$ = this.store.select(getDevelopers)

  constructor(private store: Store<State>) { }

  add() {
    this.store.dispatch({ type: '[Developer] Add' })
  }

  remove() {
    this.store.dispatch({ type: '[Developer] Remove' })
  }
}
