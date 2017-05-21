
import firebase from 'firebase';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      firebase.initializeApp({

        apiKey: "AIzaSyCZToNQX1NZCjiGjxhUtL5QHy4OLz82LUg",
        authDomain: "lupa-a5fff.firebaseapp.com",
        databaseURL: "https://lupa-a5fff.firebaseio.com",
        projectId: "lupa-a5fff",
        storageBucket: "lupa-a5fff.appspot.com",
        messagingSenderId: "502919582427"

      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
