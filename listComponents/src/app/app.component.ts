import { Component } from '@angular/core'

interface Item {
  title: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aList: Item[] = [
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
    { title: 'a' },
    { title: 'b' },
    { title: 'c' },
  ]
}
