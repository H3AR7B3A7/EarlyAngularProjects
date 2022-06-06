import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Directive Examples';
  progress = 0
  message = ''

  holdHandler($event: number) {
    console.log('%c ' + $event, 'color: #6495ed')
    this.progress = $event
    if ($event == 1000) {
      this.delete()
    }
  }

  private delete() {
    console.log('%c DELETED!!!', 'color: #ec6969; font-weight: bold')
    this.message = "DELETED"
    setTimeout(() => { this.message = '' }, 1000)
  }
}
