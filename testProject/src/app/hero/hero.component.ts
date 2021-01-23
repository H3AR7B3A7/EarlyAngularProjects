import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // Variable Binding
  title = 'Hero';
  isLiked = true;

  // Class Binding
  currentClasses = {
    star: true,
    active: false
  };

  // Style Binding
  currentStyle1 = 'color: green; width: 100px; margin: auto;';

  currentStyle2 = {
    color: 'green',
    width: '100px',
    margin: 'auto',
  };

  // Button Variables
  buttonText = 'Click Me!';
  buttonStyle: string | undefined;

  // Input Binding: Component passing DOWN data to child component.
  @Input()
  name!: string;

  // Output Binding: Component passing data UP to parent component.
  @Output()
  liked = new EventEmitter();

  // Event Binding
  public onClick(): void {
    if (this.buttonText === 'Click Me!') {
      this.buttonText = 'That tickles!';
      this.buttonStyle = 'background-color: lightblue';
    } else {
      this.buttonText = 'Click Me!';
      this.buttonStyle = '';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
