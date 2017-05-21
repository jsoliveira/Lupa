import { NgModule } from '@angular/core';
import { TesteFacebook } from './teste-facebook';

@NgModule({
  declarations: [
    TesteFacebook,
  ],
  imports: [
    //IonicModule.forChild(TesteFacebook),
  ],
  exports: [
    TesteFacebook
  ]
})
export class TesteFacebookModule {}
