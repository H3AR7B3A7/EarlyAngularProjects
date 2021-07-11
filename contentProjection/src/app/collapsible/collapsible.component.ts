import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent {

  @Input() title!: string
  visible = false

  toggleContent() {
    this.visible = !this.visible
  }
}
