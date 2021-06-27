import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {

  @Input() rating!: number
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth: number = 75

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating is ${this.rating}.`)
  }
}
