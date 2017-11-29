import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ArticuloNuevoPage } from '../pages/articulo-nuevo/articulo-nuevo';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Provider } from '../providers/provider/provider';
 const config = {
    apiKey: "AIzaSyCoOBmg0Vbpyqb30JIW95KmEX4_oE_oUGg",
    authDomain: "ionic-186307.firebaseapp.com",
    databaseURL: "https://ionic-186307.firebaseio.com",
    projectId: "ionic-186307",
    storageBucket: "ionic-186307.appspot.com",
    messagingSenderId: "787179626825"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArticuloNuevoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
 AngularFireDatabaseModule,
 AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,ArticuloNuevoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}
