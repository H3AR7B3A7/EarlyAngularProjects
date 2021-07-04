import { Component, Input } from '@angular/core';

@Component({
  selector: 'volume-meter',
  templateUrl: './volume-meter.component.html',
  styleUrls: ['./volume-meter.component.css']
})
export class VolumeMeterComponent {

  @Input() volume!: number
  @Input() path!: string

  cropHeight: number = 100

  ngOnChanges(): void {
    this.cropHeight = this.volume
  }
}
