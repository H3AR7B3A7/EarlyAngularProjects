import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent {

  title = ''
  parentTitle = "Title Set 'AfterViewInit' By: Second Child";

  constructor(
    private dataService: DataService
  ) { }

  setTitle(newTitle: string) {
    this.title = newTitle
  }

  changeParentTitle(): void {
    this.parentTitle = 'Title Changed By Second Child'
  }

  changeFirstChildTitle(): void {
    this.dataService.changeFirstChildTitle('Changed By Second Child')
  }
}
