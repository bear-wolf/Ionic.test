import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HotelInterface} from "../../shared/interfaces/hotel.interface";
import {DetailPage} from "../detail/detail";
import {BaseInput} from "ionic-angular/util/base-input";

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  public hotels: HotelInterface[]; // указание типа переменной в списке (п.4 ч.2 задания)
  public minDefaultPrice: number;
  public maxDefaultPrice: number;
  public isParkingZone: boolean;
  public enteredPriceMin: number;
  public enteredPriceMax: number;
  public showFilter: boolean = false;

  constructor(public navCtrl: NavController) {
    this.hotels = [
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос1',
        description: 'Гостиница "Космос1"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      }
    ]
  }


  ngOnInit(): void {
    //задание начальных значений
    this.maxDefaultPrice = this.hotels
      .reduce((acc, curr) => acc.roomCost > curr.roomCost ? acc : curr).roomCost;
    this.minDefaultPrice = this.hotels
      .reduce((acc, curr) => acc.roomCost < curr.roomCost ? acc : curr).roomCost;
    this.isParkingZone = false;
    this.enteredPriceMax = this.maxDefaultPrice;
    this.enteredPriceMin = this.minDefaultPrice;
  }

  //Ниже(п2 ч. 1(3 позици) задания)

  public changeMaxValue(event: UIEvent): void { // получаем изменяем максимальное значения цены
    const target = event.target as  HTMLInputElement;
    this.enteredPriceMax = target.value === '' ? this.maxDefaultPrice : +target.value
  }

  public changeMinValue(event: UIEvent): void { // получаем изменяем минимальное значения цены
    const target = event.target as  HTMLInputElement;
    this.enteredPriceMin = target.value === '' ? this.minDefaultPrice : +target.value
  }

  public changeParkingZone(event: BaseInput<boolean>): void { // чекбокс необходимости парковки
    this.isParkingZone = event.value;
  }

  public filterHotels(hotels: HotelInterface[]): HotelInterface[] { // фильтр готелей
    return hotels.filter(hotel => {
      return this.isParkingZone ?
        hotel.roomCost >= this.enteredPriceMin && hotel.roomCost <= this.enteredPriceMax && hotel.hasParking :
        hotel.roomCost >= this.enteredPriceMin && hotel.roomCost <= this.enteredPriceMax
    })
  }


  public openHotelDetails(event: MouseEvent, detail: HotelInterface): void {// метод перехода на страницу гостиницы(задание п.3 ч.1 )
    this.navCtrl.push(DetailPage, { detail });
  }

}
