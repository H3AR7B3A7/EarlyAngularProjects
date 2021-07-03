import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <ul>
      <li><a [routerLink]="['/']">Home</a></li>
      <li><a [routerLink]="['/content']">Content</a></li>
      <li><a [routerLink]="['/about']">About</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor() { }

}
