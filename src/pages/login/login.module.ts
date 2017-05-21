import { NgModule } from '@angular/core';
import { Login } from './login';
import { Facebook } from "@ionic-native/facebook";

@NgModule({
  declarations: [
    Login,
    Facebook
  ],

  exports: [
    Login,
    Facebook
  ]
})
export class LoginModule { }
