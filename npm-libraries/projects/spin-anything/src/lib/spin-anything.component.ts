import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spin-anything.component.html',
  styleUrls: ['./spin-anything.component.scss']
})
export class SpinAnythingComponent {

  @Input() img?: string;
  @Input() text?: string;
  @Input() size = '100';
  @Input() relativeSize? : string;
  @Input() speed = '3';

  getContainerStyle() {
    const sizeProp = this.relativeSize ? this.relativeSize + 'rem' : this.size + 'px';
    return { 'width' : sizeProp };
  }

  getStyle() {
    const speedProp = 'rotation ' + this.speed + 's infinite linear';
    return { 'animation' : speedProp };
  }

}