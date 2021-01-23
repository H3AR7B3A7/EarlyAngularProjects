import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title = 'Hero';
  isLiked = true;

  buttonText = 'Click Me!';
  buttonStyle: string | undefined;

  currentClasses = {
    star: true,
    active: false
  };

  currentStyle1 = 'color: greenyellow; width: 100px';

  currentStyle2 = {
    color: 'greenyellow',
    width: '100px'
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void{
    this.buttonText = 'That tickles!';
    this.buttonStyle = 'background-color: lightblue';
  }

}
