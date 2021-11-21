import { Component } from '@angular/core'
import { of } from 'rxjs'

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
  aList$ = of([
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: true },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: true },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
    { title: 'a', active: false },
    { title: 'b', active: false },
    { title: 'c', active: false },
  ])

  currentSelection: Item[] = []

  handleSelectionChanged($event: Item[]) {
    this.currentSelection = $event
  }
}
