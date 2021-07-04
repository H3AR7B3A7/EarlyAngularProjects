import { Component } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent {

  title = ''

  setTitle(newTitle: string) {
    this.title = newTitle
  }

}
