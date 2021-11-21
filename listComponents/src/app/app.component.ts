import { Component } from '@angular/core'
import { ItemService } from './item.service'

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

  constructor(
    private itemService: ItemService
  ) { }

  aList$ = this.itemService.getItems()

  currentSelection: Item[] = []

  handleSelectionChanged($event: Item[]) {
    this.currentSelection = $event
  }
}
