import { Pipe, PipeTransform } from '@angular/core';

import { FilterInterface } from './../interfaces/filter.interface';
import { HotelInterface } from '../interfaces/hotel.interface';

@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {

  transform(hotels: HotelInterface[], filterValues: FilterInterface) {
    if (hotels.length && filterValues) {
      if (filterValues.from || filterValues.to || filterValues.parking) {
        return hotels.filter((hotel: HotelInterface) => filterValues.from ? hotel.cost >= filterValues.from : true)
          .filter((hotel: HotelInterface) => {
            if (filterValues.to) {
              return hotel.cost <= filterValues.to;
            }
            return true;
          })
          .filter((hotel: HotelInterface) => {
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
