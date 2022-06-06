import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[custom-style]'
})
export class CustomStyleDirective {

  constructor(
    private el: ElementRef
  ) {
    setInterval(() => {
      if (el.nativeElement.style.color == 'rebeccapurple') {
        el.nativeElement.style.color = 'palevioletred'
      } else {
        el.nativeElement.style.color = 'rebeccapurple'
      }
    }, 300)
  }

}
