import { Component } from '@angular/core'
import { ItemService } from './item.service'
import { map, tap } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs'

interface Item {
  title: string,
  active: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  aList$ = this.itemService.getItems()

  aShortList$ = this.aList$.pipe(
    map(items => items.slice(0, 10))
  )

  secondList = []

  currentSelection: Item[] = []
  currentSelection2: Item[] = []

  // private _currentSelection2 = new BehaviorSubject<Item[]>([])

  // get currentSelectedItems(): Observable<Item[]> {
  //   return this._currentSelection2.asObservable().pipe(
  //     tap(items => console.log(items))
  //   )
  // }

  constructor(
    private itemService: ItemService
  ) { }

  handleSelectionChanged($event: Item[]) {
    this.currentSelection = $event
  }

  handleToBeAdded($event: Item[]) {
    // this._currentSelection2.next($event)
    this.currentSelection2 = $event
  }

  handleToBeRemoved($event: Item[]) {
    // this._currentSelection2.next($event)
    let index = this.currentSelection2.indexOf($event[0])
    this.currentSelection2.splice(index, 1)
  }
}
