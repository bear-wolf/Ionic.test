import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HotelsPage } from '../pages/hotels/hotels';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ListPage} from "../pages/list/list";
//import {DetailPage} from "../pages/detail/detail";
import {HotelService} from "../shared/services/hotel.service";
import {ListPageModule} from "../pages/list/list.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //DetailPage,
    HotelsPage
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    IonicModule.forRoot(MyApp),
    ListPageModule,
    // IonicPageModule.forChild(DetailPage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //DetailPage,
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
