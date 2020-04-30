import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureList'
})
export class ImpurePipe implements PipeTransform {

  transform(list: any[], args?: any): any {
    return list.filter(itemInList => itemInList[args]);
  }

}
