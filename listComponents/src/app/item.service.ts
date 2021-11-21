import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems() {
    return of([
      { title: 'abc', active: false },
      { title: 'bcd', active: false },
      { title: 'cde', active: true },
      { title: 'abc', active: false },
      { title: 'bcd', active: false },
      { title: 'cde', active: false },
      { title: 'abc', active: false },
      { title: 'bcd', active: false },
      { title: 'cde', active: false },
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
  }
}
