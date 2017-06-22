import { Component } from '@angular/core';
import { RoundProgressConfig } from 'angular-svg-round-progressbar';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LupaService } from "../../providers/lupa-service";
import { TimeUtils } from "../../tools/timeUtils";

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
  providers: [LupaService]
  
})
export class NotificacoesPage {
  //parametros da RoundedProgress
  current: number = 5;
  max: number = 50;
  min: number = 0;
  stroke: number = 5;
  radius: number = 25;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = true;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 10;
  animation: string = 'easeOutBack';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;

  //PROVIDERS
  private urlNotificacao = "offer";

  //MODELS
  public notificacoes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _config: RoundProgressConfig,
    private _lpService: LupaService) {

    _config.setDefaults({
      color: '#f00',
      background: '#0f0'
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notificacoes');


    this.notificacoes = this.getNotificacoes();

  }

  getNotificacoes(){
    let url = LupaService.host + this.urlNotificacao;

    let notificacoes = this._lpService.getWebService(url).then((dado) => {

//      let notResponse = dado['data'].result;

      let notResponse = dado['data'].result;

      let notArray = Object.keys(notResponse)

        .map(function (key) {

          var dt;

          try {
            dt = new Date(notResponse[key].endDate.date);
            
            
          } catch (error) {

            dt = new Date();

          }

          let timeUtil = new TimeUtils(dt);

          notResponse[key].timeRest = timeUtil;

          return notResponse[key]; 
            

        });
      

      return notArray;

    }).catch(error => {
      console.log("Deu Alex", error);
    });

    return notificacoes;

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
