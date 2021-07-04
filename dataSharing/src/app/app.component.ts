import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SecondChildComponent } from './second-child/second-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dataSharing';
  childTitleFromParent = "Title Set By Parent"

  @ViewChild(SecondChildComponent) secondChild!: any

  constructor() {
    // We need to somehow listen to changes of ViewChild because it is only read 'AfterViewInit'
    // please don't do this in production
    setInterval(() => {
      this.title = this.secondChild.parentTitle
    }, 5000)
  }

  ngAfterViewInit(): void {
    this.title = this.secondChild.parentTitle
  }

  myFunction(): void {
    this.title = 'Data Sharing'
  }

  handleEventClick(event: any): void {
    this.title = event
  }
}
