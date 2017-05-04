import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})



export class Login {


  constructor(public navCtrl: NavController, private fb: Facebook) {

  }

  showPage() {
    this.navCtrl.setRoot(HomePage);
  }


  onLogin() {


    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }

  doLogout() {
    this.fb.logout();
  }

  onTeste(): void {
    alert('Teste');

  }

}
