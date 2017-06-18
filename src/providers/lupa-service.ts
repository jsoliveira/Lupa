import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LupaService {

  private headers: Headers;
  private host :string = "http://sandbox.lupa.ninja/api/auth/credentials";


  constructor(public http: Http) {
    console.log('Hello LupaService Provider');

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getWebService(url: string) {

    return new Promise((resolve, reject) => {

      this.http.get(url)
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
      this.http.post(url, JSON.stringify(data), { headers: this.headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}
