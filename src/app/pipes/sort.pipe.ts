import { Pipe, PipeTransform } from '@angular/core';
import { PBook } from '../app.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: PBook[], sort: any): PBook[] {
    if (!value) return []
    if (!sort) return value

    if (sort === 'faz') {
      return value.sort((a, z) => (a.firstName > z.firstName) ? 1 : ((a.firstName < z.firstName) ? -1 : 0))
    }
    if (sort === 'fza') {
      return value.sort((a, z) => (a.firstName < z.firstName) ? 1 : ((a.firstName > z.firstName) ? -1 : 0))
    }


    if (sort === 'laz') {
      return value.sort((a, z) => (a.lastName > z.lastName) ? 1 : ((a.firstName < z.firstName) ? -1 : 0))
    }
    if (sort === 'lza') {
      return value.sort((a, z) => (a.lastName < z.lastName) ? 1 : ((a.lastName > z.lastName) ? -1 : 0))
    }


    if (sort === 'p09') {
      return value.sort((a, z) => (a.phoneNumber > z.phoneNumber) ? 1 : ((a.phoneNumber < z.phoneNumber) ? -1 : 0))
    }
    if (sort === 'p90') {
      return value.sort((a, z) => (a.phoneNumber < z.phoneNumber) ? 1 : ((a.phoneNumber > z.phoneNumber) ? -1 : 0))
    }



    return value.sort((a, z) => (a.lastName > z.lastName) ? 1 : ((a.lastName < z.lastName) ? -1 : 0))

  }

}
