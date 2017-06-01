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

}
