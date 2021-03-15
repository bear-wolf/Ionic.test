import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HotelInterface} from "../../shared/interfaces/hotel.interface";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  hotel: HotelInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hotel = navParams.get('detail');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }
}
