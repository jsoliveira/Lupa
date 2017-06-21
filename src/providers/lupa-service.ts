import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Login } from '../pages/login/login';

@Injectable()
export class LupaService {

  private static headers: Headers;
  public static host: string = "http://sandbox.lupa.ninja/api/";
//  public static urlLogin: String = "auth/credentials";



  constructor(public http: Http) {
    console.log('Hello LupaService Provider');


  }

  montaHeader(){
    LupaService.headers = new Headers();
    LupaService.headers.append('Content-Type', 'application/json');
    LupaService.headers.append('Authorization', 'Lupa '+ Login.usuarioLogado.token);

  }

  getWebService(url: string) {
    this.montaHeader();

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
    this.montaHeader();

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
