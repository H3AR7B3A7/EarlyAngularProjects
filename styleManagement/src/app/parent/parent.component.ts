import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <div class="content">
    <ul class="nav">
      <a [routerLink]="['/']"><li>Home</li></a>
      <a [routerLink]="['/content']"><li>Content</li></a>
      <a [routerLink]="['/about']"><li>About</li></a>
    </ul>
    <router-outlet class="content"></router-outlet>
  </div>
  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor() { }

}
