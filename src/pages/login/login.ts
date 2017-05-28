import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import firebase from 'firebase';
import { TesteFacebook } from "../teste-facebook/teste-facebook";
import { AbasPage } from "../abas/abas";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})



export class Login {

  public static userProfile: any = null;
  constructor(public navCtrl: NavController, public fb: Facebook) {


  }

  public doLogin() {

    this.navCtrl.setRoot(AbasPage);

  }

  facebookLogin() {
    this.fb.login(['public_profile', 'email', 'user_birthday', 'user_location', 'user_hometown', 'user_relationships']).then((response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      console.log("Facebook Response =>", response);
      console.log("Facebook Credencial =>", facebookCredential);
      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          Login.userProfile = success;
          this.navCtrl.setRoot(TesteFacebook);
        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
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
