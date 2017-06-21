import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import firebase from 'firebase';
import { TesteFacebook } from "../teste-facebook/teste-facebook";
import { AbasPage } from "../abas/abas";
import { LupaService } from "../../providers/lupa-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LupaService]

})



export class Login {

  public username:string = "";
  public password:string = "";

  public static userProfile: any = null;
  public static usarioLogado: { username: string, password: string, keepConnection: boolean, token: string };
  public static toker: any = null;

  constructor(public navCtrl: NavController, public fb: Facebook, private lpService: LupaService) {
    Login.usarioLogado =
      {
        username: "",
        password: "",
        token: "",
        keepConnection: true
      };

  }

  public doLogin() {

    let url = LupaService.host;
    url = url + LupaService.urlLogin;
    let data: any = {
      "username": this.username,
      "password": this.password,
      "keepConnection": true
    };

    this.lpService.postWebService(url, data).then((token: any) => {

      console.log("Token :", token);

      Login.usarioLogado.token = token._body;
      Login.usarioLogado.username = this.username;
      Login.usarioLogado.password = this.password;

      console.log(Login.usarioLogado);
      this.navCtrl.setRoot(AbasPage);

    }).catch(error => {


 
      console.log("Url :", url);
      console.log("Erro ao logar", error);
    });



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
