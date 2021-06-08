import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {

  keys = ''
  @ViewChild('keyContainer', {static: true}) input: ElementRef

  constructor() { }

  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement, 'keyup')
    logger.subscribe((event: KeyboardEvent) => {
      this.keys += event.key
    })
  }

}
