import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FacebookLogin } from '../../util/facebook-login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})



export class Login {

  fb: FacebookLogin;
  constructor(public navCtrl: NavController) {

    this.fb = new FacebookLogin();

  }

  showPage() {
    this.navCtrl.setRoot(HomePage);
  }


  onLogin() {

    this.fb.doLogin();
  }

  onTeste(): void {
    alert('Teste');

  }

}
