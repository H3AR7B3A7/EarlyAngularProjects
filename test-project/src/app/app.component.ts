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
  heroName3 = 'Superman';
  heroName4 = 'Flash';

  // Output Binding
  onLike1(heroName: string): void{
    window.alert(`I like ${heroName}`);
  }
  onLike2(): void{
    window.alert(`I like ${this.heroName2}`);
  }
}
