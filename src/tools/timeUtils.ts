


export class TimeUtils{
    private _CONST_MINUTES: number = 60;
    private _CONST_HOUR: number = this._CONST_MINUTES * 60;
    private _CONST_DAY: number = this._CONST_HOUR * 24;

    

    private _timeRest: number;
    public day: number;
    public hour: number;
    public minutes: number;
    public seconds: number;


    constructor(private _timeToEnd){


    }

    countDown(){

        let x = setInterval(() => {
            let dateNow = new Date();

            this._timeRest = Math.trunc(this._timeToEnd - dateNow.getTime()) / 1000;

            if(this._timeRest <= 1){
                this.day = 0;
                this.minutes=0;
                this.hour=0;
                this.seconds=0;
                return;
            }

            this.day     = this.calculateTime(this._timeRest, this._CONST_DAY);

//            console.log("Dias: " + this.day);

            this.hour    = this.calculateTime(this._timeRest, this._CONST_HOUR);

 //           console.log("Horas: " + this._timeRest);

            this.minutes = this.calculateTime(this._timeRest, this._CONST_MINUTES);

  //          console.log("Minutos: " + this.minutes);

            this.seconds = Math.trunc(this._timeRest);

   //         console.log("Segundos: " + this.seconds);

            if(this._timeRest <= 1){
                clearInterval(x);
            }


        }, 1000);

    }

    calcularTempo(){
        
    }

    calculateTime(timeRest:number, constTime:number){
        let time = timeRest / constTime;

        if(time < 1){
            return 0;
        }
        this._timeRest = this._timeRest - (Math.trunc(time) * constTime);

        return  Math.trunc(time);


    }


}