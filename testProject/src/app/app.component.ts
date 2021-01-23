import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';

  // Input Binding
  heroName1 = 'Spiderman';
  heroName2 = 'Batman';

  // Output Binding
  onLike1(): void{
    window.alert(`I like ${this.heroName1}`);
  }
  onLike2(): void{
    window.alert(`I like ${this.heroName2}`);
  }
}
