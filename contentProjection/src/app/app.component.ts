import { Component } from '@angular/core';

interface Topic {
  title: string,
  author: string,
  content: string,
  hyped: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contentProjection';

  topics: Topic[] = [
    {
      title: 'First',
      author: 'Some author',
      content: 'Some content',
      hyped: true
    },
    {
      title: 'Second',
      author: 'Some author',
      content: 'Some content',
      hyped: true
    },
    {
      title: 'Third',
      author: 'Some author',
      content: 'Some content',
      hyped: false
    },
    {
      title: 'Fourth',
      author: 'Some author',
      content: 'Some content',
      hyped: false
    },
  ]
}
