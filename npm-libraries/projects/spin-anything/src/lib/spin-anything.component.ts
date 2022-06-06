import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spin-anything.component.html',
  styleUrls: ['./spin-anything.component.scss']
})
export class SpinAnythingComponent {

  @Input() img?: string;
  @Input() text?: string;

}
