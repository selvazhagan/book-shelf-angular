import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(items: any[], ...args: any[]): any {
    if (!items) {
      return [];
    }

    if (!args[0]) {
      return items;
    }

    const filterByPages = args[0];

    return items.filter(item => {
      if (item && item[args[1]]) {
        return item[args[1]] === filterByPages;
      }
      return false;
    });
  }
}
