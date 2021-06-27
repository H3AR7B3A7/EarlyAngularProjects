import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{ title }}</h1>
    <app-products></app-products>
  </div>
  `
})
export class AppComponent {
  title = 'Bootstrap';
}
