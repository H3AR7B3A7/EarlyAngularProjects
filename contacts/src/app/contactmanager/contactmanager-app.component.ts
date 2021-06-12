import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <p style="height: 94vh;">
      <app-sidenav (activate)="receiveLoginEvent($event)"></app-sidenav>
    </p>
  `,
  styles: [
  ]
})
export class ContactmanagerAppComponent {
  @Output() loginEvent = new EventEmitter<boolean>()

  constructor() { }

  sendLoginEvent() :void {
    console.log('event sent 2')
    this.loginEvent.emit(true)
  }

  receiveLoginEvent($event: any) {
    console.log('event received 1')
    this.sendLoginEvent()
  }
}
