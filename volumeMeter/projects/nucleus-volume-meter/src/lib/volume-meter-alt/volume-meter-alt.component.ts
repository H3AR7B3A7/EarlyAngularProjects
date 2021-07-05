import { Component, Input } from '@angular/core';

@Component({
  selector: 'volume-meter-alt',
  templateUrl: './volume-meter-alt.component.html',
  styleUrls: ['./volume-meter-alt.component.css']
})
export class VolumeMeterAltComponent {

  @Input() size!: number
  @Input() volume!: number
  @Input() path!: string

  multiplier: number = 1.5
}
