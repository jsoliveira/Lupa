import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { LupaService } from "../../providers/lupa-service";
import { Login } from "../login/login";

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
  providers: [LupaService]

})
export class FavoritosPage {
  public slides: Slides;

  //PROVIDER
  private urlFavoritos = `account/${Login.usuarioLogado.id}/follow`;
  private urlFavorito  = 'contact/';
  //Modelo
  public favoritos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private lpService: LupaService) {



  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Favoritos');

//      this.favoritos = this.fs.getFavoritos();
      this.favoritos = this.getFavoritos();


  }

  getFavoritos(){
    let url = LupaService.host + this.urlFavoritos;

    let favResponse = this.lpService.getWebService(url).then((dado) => {
      console.log(dado);


      return dado['data'].result;

    }).catch(error => {
      console.log("Deu Alex", error);
    });


    return favResponse;


  }

  excluir(favorito) {

    console.log("oldLista -> " + this.favoritos);
    console.log("excluir -> " + favorito);

    
    this.favoritos = this.favoritos.filter(item => item !== favorito);

  console.log("novaLista -> " + this.favoritos);

  }

  getFavorito(favorito){
    let url = LupaService.host + this.urlFavorito + favorito.contact.id;
    let fav = this.lpService.getWebService(url)
      .then((dado) => {
        console.log('dado', dado['data']);


        return dado['data'];

      }).catch(error => {
        console.log('Deu Alex', error);
      });

      return fav;    
  }

  goPerfil(favorito){
    console.log(favorito);


    this.getFavorito(favorito).then((fav) => {
        this.navCtrl.push(PerfilPage, {
          favorito: fav
        });
      });


  }


}
