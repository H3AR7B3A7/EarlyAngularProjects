import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <div class="content">
    <ul class="nav">
      <li [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"li><h2>Home</h2></li>
      <li [routerLink]="['/content']" routerLinkActive="active"><h2>Content</h2></li>
      <li [routerLink]="['/about']" routerLinkActive="active"><h2>About</h2></li>
    </ul>
    <router-outlet class="content"></router-outlet>
  </div>
  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor() { }

}
