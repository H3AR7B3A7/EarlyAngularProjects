import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { getDevelopers } from './state/developer.reducer'
import { State } from './state/developer.state'

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
