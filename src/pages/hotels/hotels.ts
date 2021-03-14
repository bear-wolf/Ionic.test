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
  public minDefaultPrice: number;
  public maxDefaultPrice: number;
  public isParkingZone: boolean = false;
  public enteredPriceMin: number;
  public enteredPriceMax: number;
  public showFilter: boolean = false;

  constructor(
    public navCtrl: NavController,
    public hotelService: HotelService) {

    this.maxDefaultPrice = this.hotelService.getHotels().reduce((acc, curr) => acc.cost > curr.cost ? acc : curr).cost;

    this.minDefaultPrice = this.hotelService.getHotels().reduce((acc, curr) => acc.cost < curr.cost ? acc : curr).cost;
  }


  ngOnInit(): void {
    this.enteredPriceMax = this.maxDefaultPrice;
    this.enteredPriceMin = this.minDefaultPrice;
  }

  public changeMaxValue(event: UIEvent): void { // получаем изменяем максимальное значения цены
    const target = event.target as HTMLInputElement;
    this.enteredPriceMax = target.value === '' ? this.maxDefaultPrice : +target.value
  }

  public changeMinValue(event: UIEvent): void { // получаем изменяем минимальное значения цены
    const target = event.target as HTMLInputElement;
    this.enteredPriceMin = target.value === '' ? this.minDefaultPrice : +target.value
  }

  public changeParkingZone(event: BaseInput<boolean>): void { // чекбокс необходимости парковки
    this.isParkingZone = event.value;
  }

  public filterHotels(hotels: HotelInterface[]): HotelInterface[] { // фильтр готелей
    return hotels.filter(hotel => {
      return this.isParkingZone ?
        hotel.cost >= this.enteredPriceMin && hotel.cost <= this.enteredPriceMax && hotel.hasParking :
        hotel.cost >= this.enteredPriceMin && hotel.cost <= this.enteredPriceMax
    })
  }


  public openHotelDetails(event: MouseEvent, detail: HotelInterface): void {
    this.navCtrl.push(DetailPage, {detail});
  }

}
