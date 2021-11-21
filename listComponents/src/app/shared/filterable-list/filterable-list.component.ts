import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-filterable-list',
  templateUrl: './filterable-list.component.html',
  styleUrls: ['./filterable-list.component.scss']
})
export class FilterableListComponent implements OnInit {

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

  ngOnInit(): void {
    this.filteredItems = this.items
  }

  performFilter(filterBy: string): any[] {
    console.log('Filter: ' + this.filter)
    filterBy = filterBy.toLocaleLowerCase()
    return this.items.filter((item: any) => item.title.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }
}
