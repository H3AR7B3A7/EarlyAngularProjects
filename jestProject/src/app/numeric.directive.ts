import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {

  @HostBinding('class')
  currentClass!: string;

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void{
    const charCode = event.key.charCodeAt(0);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.currentClass = 'invalid';
    } else {
      this.currentClass = 'valid';
    }
  }

  constructor() { }

}
