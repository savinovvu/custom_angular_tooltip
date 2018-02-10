import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'regexpClean'
})
export class RegexpCleanerPipe implements PipeTransform {

  transform(value: string, regexp: string): string {
    return value.replace(regexp, '');

  }

}
