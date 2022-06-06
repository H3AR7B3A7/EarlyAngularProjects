import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1 class="header">
      My Header
    </h1>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

}
