import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LupaService {

  private static headers: Headers;
  public static host: string = "http://sandbox.lupa.ninja/api/";
  public static urlLogin: String = "auth/credentials";



  constructor(public http: Http) {
    console.log('Hello LupaService Provider');

    LupaService.headers = new Headers();
    LupaService.headers.append('Content-Type', 'application/json');
    LupaService.headers.append("Authorization", "Lupa eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0OTc3MTkwOTUsImp0aSI6e30sImlzcyI6Imx1cGEiLCJuYmYiOjE0OTc3MTkwOTUsImV4cCI6MTUwODA4NzA5NSwiZGF0YSI6eyJpZCI6MSwibmFtZSI6IkpvbmF0aGFuIiwic3VybmFtZSI6IkJvZ2Rhbm92aWN6IiwiZ2VuZGVyIjoiTSIsImJpcnRoZGF0ZSI6eyJkYXRlIjoiMjAxNy0wNS0yOCAwMDowMDowMC4wMDAwMDAiLCJ0aW1lem9uZV90eXBlIjozLCJ0aW1lem9uZSI6IlVUQyJ9LCJlbWFpbCI6Impob25ueWJhaWxAZ21haWwuY29tIiwidGVsZXBob25lIjoiNDQ5OTEyNzQzMjEiLCJ1c2VyIjp7InVzZXJuYW1lIjoiamhvbm55YmFpbCJ9LCJmb2xsb3ciOlt7Im5vdGlmaWNhdGlvbiI6dHJ1ZSwiY29udGFjdCI6eyJpZCI6IjgifX1dLCJyb2xlIjpbeyJhY3RpdmUiOnRydWUsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhZG9yIEdlcmFsIn0sInBlcm1pc3Npb24iOnsic3RhdGUiOnsiSW5zZXJpciI6dHJ1ZSwiQWx0ZXJhciI6dHJ1ZSwiUmVtb3ZlciI6dHJ1ZSwiVmlzdWFsaXphciI6dHJ1ZX0sImNpdHkiOnsiSW5zZXJpciI6dHJ1ZSwiQWx0ZXJhciI6dHJ1ZSwiUmVtb3ZlciI6dHJ1ZSwiVmlzdWFsaXphciI6dHJ1ZX0sImNhdGVnb3J5Ijp7Ikluc2VyaXIiOnRydWUsIkFsdGVyYXIiOnRydWUsIlJlbW92ZXIiOnRydWUsIlZpc3VhbGl6YXIiOnRydWV9LCJhY3Rpdml0eSI6eyJJbnNlcmlyIjp0cnVlLCJBbHRlcmFyIjp0cnVlLCJSZW1vdmVyIjp0cnVlLCJWaXN1YWxpemFyIjp0cnVlfSwiam9iIjp7Ikluc2VyaXIiOnRydWUsIkFsdGVyYXIiOnRydWUsIlJlbW92ZXIiOnRydWUsIlZpc3VhbGl6YXIiOnRydWV9LCJjb250YWN0Ijp7Ikluc2VyaXIiOnRydWUsIkFsdGVyYXIiOnRydWUsIlJlbW92ZXIiOnRydWUsIlZpc3VhbGl6YXIiOnRydWV9LCJvZmZlciI6eyJJbnNlcmlyIjp0cnVlLCJBbHRlcmFyIjp0cnVlLCJSZW1vdmVyIjp0cnVlLCJWaXN1YWxpemFyIjp0cnVlfSwiYWNjb3VudCI6eyJJbnNlcmlyIjp0cnVlLCJBbHRlcmFyIjp0cnVlLCJWaXN1YWxpemFyIjp0cnVlfSwicm9sZSI6eyJJbnNlcmlyIjp0cnVlLCJBbHRlcmFyIjp0cnVlLCJSZW1vdmVyIjp0cnVlLCJWaXN1YWxpemFyIjp0cnVlfX19LHsiYWN0aXZlIjp0cnVlLCJyb2xlIjp7ImlkIjozLCJuYW1lIjoiTmF2ZWdhbnRlIn0sInBlcm1pc3Npb24iOnsic3RhdGUiOnsiVmlzdWFsaXphciI6dHJ1ZX0sImNpdHkiOnsiVmlzdWFsaXphciI6dHJ1ZX0sImNhdGVnb3J5Ijp7IlZpc3VhbGl6YXIiOnRydWV9LCJhY3Rpdml0eSI6eyJWaXN1YWxpemFyIjp0cnVlfSwiam9iIjp7IlZpc3VhbGl6YXIiOnRydWV9LCJjb250YWN0Ijp7IlZpc3VhbGl6YXIiOnRydWV9LCJvZmZlciI6eyJWaXN1YWxpemFyIjp0cnVlfSwiYWNjb3VudCI6eyJBbHRlcmFyIjp0cnVlLCJWaXN1YWxpemFyIjp0cnVlfX19XX19.eFa6KWDcxxGpmoccgZiTDeTMCCkS1RJ0LZZ-2SDKXeRxDGHGeFE-D8m0-rAxX5F7B7qm2hMWkkZ6JBG7oqAohQ");

  }

  getWebService(url: string) {

    return new Promise((resolve, reject) => {

      this.http.get(url,{ headers: LupaService.headers })
        .map(res => res.json())
        .subscribe(data => {

          resolve(data);

        }, (err) => {

          reject(err);
        });
    });
  }

  postWebService(url: string, data) {

    return new Promise((resolve, reject) => {
      this.http.post(url, JSON.stringify(data), { headers: LupaService.headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}
