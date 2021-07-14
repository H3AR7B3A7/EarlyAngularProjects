import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completion'
})
export class CompletionPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Completed' : 'In Progress';
  }

}
