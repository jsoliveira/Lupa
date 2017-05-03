
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

export class FacebookLogin {

private fb: Facebook;
  constructor() { 

    this.fb = new Facebook();
  }

  doLogin() {

    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }
}





