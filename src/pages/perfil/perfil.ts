import { Component } from '@angular/core';
import { RoundProgressConfig } from 'angular-svg-round-progressbar';
import { FavoritosPage } from '../favoritos/favoritos';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  //MODEL
  favorito: any;

  offerArray:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _config: RoundProgressConfig) {

      this.favorito = navParams.get("favorito");

      let offerObject = this.favorito.offer;

      this.offerArray = Object.keys(offerObject)
      .map(function (key) {
        var dt = new Date(offerObject[key].endDate.date);

        // var dif = (dt.getTime() - di.getTime()) / 1000;

        // console.log("Diferenca em segundos: " + dif);

        
        let timeUtil = new TimeUtils(dt);

        offerObject[key].timeRest = timeUtil;

        return offerObject[key]; 
      });

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
