import { Profile as OAuthProfile } from 'passport-facebook';

import { Profile } from './Profile';

export class FacebookProfile extends Profile<OAuthProfile> {
  public getID() {
    return this._profile.id;
  }

  public getEmail() {
    if (this._profile.emails && this._profile.emails.length && this._profile.emails[0].value)
      return this._profile.emails[0].value;
    return '';
  }

  public create() {
    return {
      facebookProviderId: this.getID(),
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      email: this.getEmail(),
    };
  }

  protected getFirstName() {
    if (this._profile.name && this._profile.name.givenName) return this._profile.name.givenName;
    return '';
  }

  protected getLastName() {
    if (this._profile.name && this._profile.name.familyName) return this._profile.name.familyName;
    return '';
  }
}
