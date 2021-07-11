import { Component } from '@angular/core';

interface Topic {
  title: string,
  author: string,
  content: string
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
      content: 'Some content'
    },
    {
      title: 'Second',
      author: 'Some author',
      content: 'Some content'
    },
    {
      title: 'Third',
      author: 'Some author',
      content: 'Some content'
    },
    {
      title: 'Fourth',
      author: 'Some author',
      content: 'Some content'
    },
  ]
}
