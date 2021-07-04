import { Component } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent {

  title = ''
  parentTitle = "Title Set 'AfterViewInit' By: Second Child";

  setTitle(newTitle: string) {
    this.title = newTitle
  }

  changeParentTitle(): void {
    this.parentTitle = 'Title Changed By Second Child'
  }
}
