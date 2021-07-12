import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1: return "leader"
      case 2: return "fighter"
      case 3: return "shipmate"
      default: return "stranger"
    }
  }
}
