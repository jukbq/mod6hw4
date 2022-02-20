import { Pipe, PipeTransform } from '@angular/core';

import { PBook } from '../app.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: PBook[], search: any): PBook[] {
    const find = search.toString()
    if (!value) return []
    if (!find) return value
    return value.filter(myBook => myBook.firstName.toLowerCase().includes(find.toLowerCase()) ||
      myBook.lastName.toLowerCase().includes(find.toLowerCase()) ||
      myBook.phoneNumber.toString().includes(find))
  }

}
