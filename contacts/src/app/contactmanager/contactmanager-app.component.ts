import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <p style="height: 94vh;">
      <app-sidenav (activate)="receiveLoginEvent()"></app-sidenav>
    </p>
  `
})
export class ContactmanagerAppComponent {
  @Output() loginEvent = new EventEmitter<boolean>()

  sendLoginEvent(): void {
    console.log('event sent 2')
    this.loginEvent.emit(true)
  }

  receiveLoginEvent(): void {
    console.log('event received 1')
    this.sendLoginEvent()
  }
}
