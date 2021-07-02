import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ title }}</h1>
  <button [routerLink]="['/login']">Sign In</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Routing';
}
