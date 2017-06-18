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
import { PerfilPage } from "../pages/perfil/perfil";
import { FavoritosPage } from "../pages/favoritos/favoritos";
import { AjustesPage } from "../pages/ajustes/ajustes";
import { ConversasPage } from "../pages/conversas/conversas";
import { LupaPage } from "../pages/lupa/lupa";
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { FavoritoService } from '../domain/favoritos/favoritoService';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

 
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
    LupaPage,
    PerfilPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    LupaPage,
    PerfilPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Geolocation,
    FavoritoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
