import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-filterable-list',
  templateUrl: './filterable-list.component.html',
  styleUrls: ['./filterable-list.component.scss']
})
export class FilterableListComponent implements OnChanges {

  @Input() search: boolean = true

  @Input() items!: any[]
  filteredItems: any[] = []

  _filter!: string

  get filter(): string {
    return this._filter
  }

  set filter(value: string) {
    this._filter = value
    this.filteredItems = this.filter !== '' ? this.performFilter(this.filter) : this.items
  }

  @Output() selectionChanged = new EventEmitter<any[]>()

  selection: any[] = []

  ngOnChanges(): void {
    this.filteredItems = this.items
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.items.filter((item: any) => item.title.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  toggleSelected(item: any): void {
    if (this.selection.includes(item)) {
      const index = this.selection.indexOf(item)
      this.selection.splice(index, 1)
    } else {
      this.selection.push(item)
    }
    this.selectionChanged.emit(this.selection)
  }

  isSelected(item: any) {
    return this.selection.includes(item)
  }

  handleMouseEnter(item: any): void {
    item.border = 'solid 1px'
  }

  handleMouseLeave(item: any): void {
    item.border = 'none'
  }
}
