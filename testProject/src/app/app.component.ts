import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';

  // Input Binding
  heroName = 'Spiderman';

  // Output Binding
  onLike(): void{
    window.alert(`I like ${this.heroName}`);
  }
}
