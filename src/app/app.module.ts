import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HotelsPage } from '../pages/hotels/hotels';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HotelService} from "../shared/services/hotel.service";
import {DetailPage} from "../pages/detail/detail";
import {FilterPipe} from "../shared/pipes/filter.pipe";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    HotelsPage,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    HotelsPage
  ],
  providers: [
    HotelService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
