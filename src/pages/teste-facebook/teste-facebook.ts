import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from "../login/login";
import { Facebook } from "@ionic-native/facebook";

@IonicPage()
@Component({
  selector: 'page-teste-facebook',
  templateUrl: 'teste-facebook.html',
})
export class TesteFacebook {

  public userProfile: any = null;
  public user: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook) {

    this.userProfile = Login.userProfile;
    this.getUserProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteFacebook');
  }

  getUserProfile() {


    this.fb.api("/me?fields=name,birthday,location,email,hometown,relationship_status", []).then((data: any) => {

      console.log("Retorno da chamada :", data);

      this.user = data;


    }).catch((error) => {


    });
  }

}
