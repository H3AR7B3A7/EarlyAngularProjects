import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {

  keys1 = ''
  keys2 = ''
  numeric = 1 // Any number will do

  @ViewChild('keyContainer', {static: true}) input: ElementRef

  constructor() { }

  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement, 'keyup')
    logger.subscribe((event: KeyboardEvent) => {
      this.keys1 += event.key
    })

    logger.pipe(
      map((evt: KeyboardEvent) => evt.key.charCodeAt(0)),
      filter(code => {
        if(this.numeric) {
          return !(code > 31 && (code < 48 || code > 57))
        }
        return true
      }),
      tap((digit => this.keys2 += String.fromCharCode(digit)))
    ).subscribe()
  }

}
