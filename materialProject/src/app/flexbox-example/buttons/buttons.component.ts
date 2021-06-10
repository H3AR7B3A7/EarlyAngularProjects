import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <div>
    <app-toolbar></app-toolbar>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel recusandae quam rerum. Quibusdam soluta fuga cum adipisci pariatur eos illum quo voluptate qui culpa, consequatur, libero quaerat necessitatibus omnis!</p>

    <div style="text-align: center;">
      <button mat-raised-button>Sign In</button>
      <mat-checkbox   class="example-margin"
                      color="primary">
        Remember me
      </mat-checkbox>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
