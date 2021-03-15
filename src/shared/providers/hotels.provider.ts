import { Injectable } from '@angular/core';

import { HotelInterface } from '../interfaces/hotel.interface';
import {Observable} from "rxjs";

@Injectable()
export class HotelsProvider {

  getHotels(): Observable<HotelInterface[]> {
    //return this.file.readAsText(this.file.applicationDirectory + "www/assets/mocks", "hotels.json");
    return new Observable((observer) => {
      // @ts-ignore
      this.file.getFile(this.file.applicationDirectory+ "/www/assets/mocks", "hotels.json", "").subscribe((response)=> {
        observer.next(response);
        observer.complete();
      });
    });
  }
}
