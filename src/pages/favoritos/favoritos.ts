import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { FavoritoService } from "../../domain/favoritos/favoritoService";

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
  public isDataAvailable: boolean = false;
  public favoritos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fs: FavoritoService) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Favoritos');

      this.favoritos = this.fs.getFavoritos();

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

  goPerfil(favorito){

    this.navCtrl.push(PerfilPage, {
      favorito: favorito
    });

  }


}
