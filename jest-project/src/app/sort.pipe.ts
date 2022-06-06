import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './heroes/hero.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Hero[], arg: string): Hero[] {
    if (value){
      return value.sort((a: any, b: any) => {
        if (a[arg] < b[arg]) {
          return -1;
        } else if (a[arg] > b[arg]){
          return 1;
        }
        return 0;
      });
    }
    return [];
  }

}
