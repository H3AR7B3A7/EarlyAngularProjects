import { Component } from '@angular/core';

interface Event {
  name: string,
  time?: string
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  events: Event[] = [
    {
      name: "breakdance",
      time: '7:00 PM'
    },
    {
      name: "ballroom dancing",
      time: '8:00 PM'
    },
    {
      name: "swing",
      time: '9:00 PM'
    },
    {
      name: "clip dance",
    },
  ]

  getClass(event: Event) {
    if (event.time === '8:00 PM')
      return 'blue bold'
    return ''
  }
}
