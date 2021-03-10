import { Pipe, PipeTransform } from '@angular/core';

import { Filter } from '../interfaces/filter.interface';
import { Hotel } from '../interfaces/hotel.interface';

@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {

  transform(hotels: Hotel[], filterValues: Filter) {
    if (hotels.length && filterValues) {
      if (filterValues.from || filterValues.to || filterValues.parking) {
        return hotels.filter((hotel: Hotel) => filterValues.from ? hotel.roomCost >= filterValues.from : true)
          .filter((hotel: Hotel) => {
            if (filterValues.to) {
              return hotel.roomCost <= filterValues.to;
            }
            return true;
          })
          .filter((hotel: Hotel) => {
            if (filterValues.parking) {
              return hotel.hasParking;
            }
            return true;
          });
      }
    }

    return hotels;
  }
}
