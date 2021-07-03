import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
