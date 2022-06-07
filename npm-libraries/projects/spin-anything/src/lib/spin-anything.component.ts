import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spin-anything.component.html',
  styleUrls: ['./spin-anything.component.scss'],
})
export class SpinAnythingComponent {
  @Input() img?: string;
  @Input() text?: string;
  @Input() size = '100';
  @Input() relativeSize?: string;
  @Input() speed = '3';
  @Input() color = '#000';
  @Input() weight = '300';
  @Input() fontSize = '20';
  @Input() relativeFontSize?: string;
  @Input() fontStyle = 'normal';

  getContainerStyle() {
    const sizeProp = this.relativeSize
      ? this.relativeSize + 'rem'
      : this.size + 'px';
    return { width: sizeProp };
  }

  getStyle() {
    const speedProp = 'rotation ' + this.speed + 's infinite linear';
    const fontSizeParam = this.relativeFontSize
      ? this.relativeFontSize + 'rem'
      : this.fontSize + 'px';
    return {
      animation: speedProp,
      'font-weight': this.weight,
      'font-size': fontSizeParam,
      color: this.color,
      'font-style': this.fontStyle,
    };
  }
}
