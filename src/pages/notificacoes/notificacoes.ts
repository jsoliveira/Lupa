import { Component, ViewChild } from '@angular/core';
import { RoundProgressConfig } from 'angular-svg-round-progressbar';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
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

  //MODELS
  public notificacoes;

  public nomeDaImagem: string = "";

  //PROVIDERS
  private urlNotificacao = `offer`;


  @ViewChild(Slides) slides: Slides;

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

  getNotificacoes() {
    let url = LupaService.host + this.urlNotificacao;

    let notificacoes = this._lpService.getWebService(url).then((dado) => {

      let notResponse = dado['data'].result;

      let notArray = Object.keys(notResponse)

        .map(function (key) {

          notResponse[key].timeRest = new TimeUtils();

          if(notResponse[key].image){
            notResponse[key].urlImagem = 'https://lupa.ninja/data/contact/offer/' + notResponse[key].image[0].filename;

          }


          return notResponse[key];

        });


      let novoArray = [];
      let dataAtual = new Date();
      notArray.forEach(function (item) {

        if (item.endDate) {
          if (new Date(item.endDate.date).getTime() > dataAtual.getTime()) {
            novoArray.push(item);
          }

        }

      });

      novoArray[0].timeRest = new TimeUtils();

      novoArray[0].timeRest.countDown(new Date(novoArray[0].endDate.date));

      notArray = [];

      return novoArray;

    }).catch(error => {
      console.log("Deu Alex", error);
    });

    return notificacoes;
    

  }

  slideChanged() {
    try {
      let array = this.notificacoes.__zone_symbol__value;
      let index = this.slides.getActiveIndex();

      //ALGORITMO QUANDO FAZER SLIDE PARA A ESQUERDA
      if (this.slides.getActiveIndex() == 0) {
        //Finaliza o contado anterior
        array[index + 1].timeRest.countDownStop();
        //inicia o contador da pagina ativa
        array[index].timeRest.countDown();
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
