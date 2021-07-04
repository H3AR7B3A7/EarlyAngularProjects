import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataSharing';
  childTitleFromParent = "Title Set By Parent"

  myFunction(): void {
    this.title = 'Data Sharing'
  }

  handleEventClick(event: any): void {
    this.title = event
  }
}
