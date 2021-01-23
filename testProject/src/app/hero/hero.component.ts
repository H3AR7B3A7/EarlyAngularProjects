import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // Binding Variables
  title = 'Hero';
  isLiked = true;

  // Binding Classes
  currentClasses = {
    star: true,
    active: false
  };

  // Binding Styles
  currentStyle1 = 'color: greenyellow; width: 100px';

  currentStyle2 = {
    color: 'greenyellow',
    width: '100px'
  };

  // Button
  buttonText = 'Click Me!';
  buttonStyle: string | undefined;

  // Input Binding: Component passing DOWN data to child component.
  @Input()
  name!: string;

  // Output Binding: Component passing data UP to parent component.
  @Output()
  liked = new EventEmitter();

  // Event Binding
  public onClick(): void{
    this.buttonText = 'That tickles!';
    this.buttonStyle = 'background-color: lightblue';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
