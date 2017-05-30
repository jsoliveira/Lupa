import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Favoritos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  public favoritos;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.favoritos = [
        {nome: "Supermercado Bom dia", inNotificacao: true},
        {nome: "Supermercado Muffato", inNotificacao: false},

      ];

      console.log(this.favoritos);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favoritos');
  }

}
