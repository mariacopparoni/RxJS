import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(value: any): string {
    if (value && value.name) {
      return value.name;
    }
    return '';
  }
}
