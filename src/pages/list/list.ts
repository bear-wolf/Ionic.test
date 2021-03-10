import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {HotelInterface} from "../../shared/interfaces/hotel.interface";
import {FilterInterface} from "../../shared/interfaces/filter.interface";
import {HotelService} from "../../shared/services/hotel.service";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  providers: [HotelService],
  templateUrl: 'list.html',
})
export class ListPage {
  hotels: Array<HotelInterface>;
  filterValues: FilterInterface = {};

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController,
    private hotelService: HotelService,
  ) { }

  ngOnInit() {
    // this.hotels = this.hotelService.getHotels();
  }

  // openHotelOverviewPage(hotel: Hotel): void {
  //   this.navCtrl.push(HotelOverviewPage, { hotel });
  // }
  //
  // openFilterModal(): void {
  //   const modal = this.modalController.create(FilterPage, {
  //     filterValues: this.filterValues,
  //   });
  //
  //   modal.present();
  //   modal.onDidDismiss((filterValues: Filter) => {
  //     this.filterValues = filterValues;
  //   });
  // }

}
