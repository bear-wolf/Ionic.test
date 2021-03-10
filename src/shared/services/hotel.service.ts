import { Injectable } from '@angular/core';
// import { File } from '@ionic-native/file/ngx';
import { HotelInterface } from '../interfaces/hotel.interface';

@Injectable()
export class HotelService {

  // constructor(private file: File) { }

  hotels: HotelInterface[] = [

  ];

  // getHotels(): Observable<HotelInterface[]> {
  //   //return this.file.readAsText(this.file.applicationDirectory + "www/assets/mocks", "hotels.json");
  //   return new Observable((observer) => {
  //     // @ts-ignore
  //     this.file.getFile(this.file.applicationDirectory+ "/www/assets/mocks", "hotels.json", "").subscribe((response)=> {
  //       observer.next(response);
  //       observer.complete();
  //     });
  //   });
  // }
}
