import { Geolocation } from '@ionic-native/geolocation';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Facebook } from "@ionic-native/facebook";
import { TesteFacebook } from "../pages/teste-facebook/teste-facebook";
import { AbasPage } from "../pages/abas/abas";
import { NotificacoesPage } from "../pages/notificacoes/notificacoes";
import { FavoritosPage } from "../pages/favoritos/favoritos";
import { AjustesPage } from "../pages/ajustes/ajustes";
import { ConversasPage } from "../pages/conversas/conversas";
import { LupaPage } from "../pages/lupa/lupa";
import { RoundProgressModule } from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    TesteFacebook,
    AbasPage,
    AjustesPage,
    FavoritosPage,
    NotificacoesPage,
    ConversasPage,
    LupaPage
    
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    TesteFacebook,
    AbasPage,
    AjustesPage,
    FavoritosPage,
    NotificacoesPage,
    ConversasPage,
    LupaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
