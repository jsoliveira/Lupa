import { NgModule } from '@angular/core';
import { Principal } from './principal';

@NgModule({
  declarations: [
    Principal,
  ],
  imports: [
   // IonicModule.forChild(Principal),
  ],
  exports: [
    Principal
  ]
})
export class PrincipalModule {}
