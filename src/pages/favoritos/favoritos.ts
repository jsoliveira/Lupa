import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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
  public slides: Slides;
  public favoritos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.favoritos = [
      { nome: "Supermercado Bom dia", inNotificacao: true },
      { nome: "Supermercado Muffato", inNotificacao: false },

    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favoritos');
  }

  slideChanged(event) {
    console.log(event.direction);

    console.log('funcionou');

  }

  excluir(favorito) {

    console.log("oldLista -> " + this.favoritos);
    console.log("excluir -> " + favorito);

    
    this.favoritos = this.favoritos.filter(item => item !== favorito);

  console.log("novaLista -> " + this.favoritos);

  }


}
