import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <p>
      content works!
    </p>
  `,
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
