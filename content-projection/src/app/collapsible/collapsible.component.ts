import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent {
  visible = false

  toggleContent() {
    this.visible = !this.visible
  }
}
