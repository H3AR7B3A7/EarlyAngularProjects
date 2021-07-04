import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent {

  @Input() newTitle: any

  @Output() eventClick = new EventEmitter

  handleClick(): void {
    this.eventClick.emit('Title Set By Child')
  }

}
