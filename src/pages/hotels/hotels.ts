import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HotelInterface} from "../../shared/interfaces/hotel.interface";
import {DetailPage} from "../detail/detail";
import {BaseInput} from "ionic-angular/util/base-input";
import {HotelService} from "../../shared/services/hotel.service";

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  public isParkingZone: boolean = false;
  public inputMin: number;
  public inputMax: number;
  public showFilter: boolean = false;
  public minCost: number;
  public maxCost: number;

  constructor(
    public navCtrl: NavController,
    public hotelService: HotelService) {

    this.maxCost = this.hotelService.getHotels().reduce((acc, curr) => acc.cost > curr.cost ? acc : curr).cost;

    this.minCost = this.hotelService.getHotels().reduce((acc, curr) => acc.cost < curr.cost ? acc : curr).cost;
  }


  ngOnInit(): void {
    this.inputMax = this.maxCost;
    this.inputMin = this.minCost;
  }

  public changeParkingZone(event: BaseInput<boolean>) {
    this.isParkingZone = event.value;
  }

  public getHotelsSort(hotels: HotelInterface[]): HotelInterface[] {
    return hotels.filter(hotel => {
      let value = null;
      if (this.isParkingZone) {
        value = hotel.cost >= this.inputMin && hotel.cost <= this.inputMax && hotel.hasParking;
      } else {
        value = hotel.cost >= this.inputMin && hotel.cost <= this.inputMax;
      }

      return value;
    })
  }

  public goToDetail(detail: HotelInterface, event: any): void {
    this.navCtrl.push(DetailPage, {detail});
  }

  public onChangeMinCost(event: any) {
    let data = event.target as HTMLInputElement;

    if (data.value === '') {
      this.inputMin = this.minCost;
    } else {
      this.inputMin = +data.value;
    }
  }

  public onChangeMaxCost(data: any): void {
    data = data.target as HTMLInputElement;

    if (data.value === '') {
      this.inputMax = this.maxCost;
    } else {
      this.inputMax = +data.value;
    }
  }
}
