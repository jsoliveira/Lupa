import { Component, ViewChild } from '@angular/core';
import { RoundProgressConfig } from 'angular-svg-round-progressbar';
import { FavoritosPage } from '../favoritos/favoritos';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { TimeUtils } from '../../tools/timeUtils';

/**
 * Generated class for the Perfil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  //parametros da RoundedProgress
  max: number = 50;
  min: number = 0;
  stroke: number = 5;
  radius: number = 25;
  semicircle: boolean = false;
  rounded: boolean = true;
  responsive: boolean = true;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 10;
  animation: string = 'easeOutBack';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;

  @ViewChild(Slides) slides: Slides;

  //url
//  private _urlContact = `contact/${this.favorito.id}`

  //MODEL
  favorito: any;
  telephones: any;

  offerArray:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _config: RoundProgressConfig) {

      this.favorito = navParams.get("favorito");

      console.log('favorito', this.favorito);

      this.favorito.urlCapa = 'https://lupa.ninja/data/contact/logo/' + this.favorito.info.logo;

      this.telephones = this.favorito.telephone;

      let offerObject = this.favorito.offer;

      this.offerArray = Object.keys(offerObject)
      .map(function (key) {
        console.log('key', offerObject[key]);

        offerObject[key].urlImagem = 'https://lupa.ninja/data/contact/offer/' + offerObject[key].image[0].filename;

        offerObject[key].timeRest = new TimeUtils();

        return offerObject[key]; 
      });

      this.offerArray[0].timeRest = new TimeUtils();
      this.offerArray[0].timeRest.countDown(new Date(this.offerArray[0].endDate.date));


      // let novoArray = [];
      // let dataAtual = new Date();
      // this.offerArray.forEach(function (item) {

      //   if (item.endDate) {
      //     if (new Date(item.endDate.date).getTime() > dataAtual.getTime()) {
      //       novoArray.push(item);
      //     }

      //   }

      // });

      // console.log('teste', novoArray);

      // if(novoArray){
      //   novoArray[0].timeRest = new TimeUtils();

      //   novoArray[0].timeRest.countDown(new Date(novoArray[0].endDate.date));

      //   this.offerArray = novoArray;
      // }

      _config.setDefaults({
        color: '#f00',
        background: '#0f0'
      });

  }


  voltar(){
    this.navCtrl.setRoot(FavoritosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');


  }

  slideChanged(){
    try {

      let array = this.offerArray;
      let index = this.slides.getActiveIndex();

      console.log(array);


      //ALGORITMO QUANDO FAZER SLIDE PARA A ESQUERDA
      if (this.slides.getActiveIndex() == 0) {
        //Finaliza o contado anterior
        array[index + 1].timeRest.countDownStop();
        //inicia o contador da pagina ativa
        array[index].timeRest.countDown(new Date(array[index].endDate.date));
        return;
      }
      //SLIDE NORMAL PARA A DIREITA
      //finaliza o caontado anterior
      array[(index - 1)].timeRest.countDownStop();
      //inicia o contador ativo
      array[index].timeRest.countDown(new Date(array[index].endDate.date));

//      console.log('trocou de slide: ', array[index]);
      
    } catch (error) {
      
    }
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 2 + 'px'
    };
  }


}
