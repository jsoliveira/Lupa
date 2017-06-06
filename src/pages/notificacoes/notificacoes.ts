import { Component } from '@angular/core';
import { RoundProgressModule, RoundProgressConfig } from 'angular-svg-round-progressbar';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Notificacoes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html',
})
export class NotificacoesPage {
  current: number = 27;
  max: number = 50;
  stroke: number = 5;
  radius: number = 25;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = true;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _config: RoundProgressConfig) {

      _config.setDefaults({
        color: '#f00',
        background: '#0f0'
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notificacoes');
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
