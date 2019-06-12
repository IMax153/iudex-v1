import { Profile } from './Profile';

export class GoogleProfile extends Profile {
  public getID() {
    return this._profile.id;
  }

  protected getFirstName() {
    if (this._profile.name && this._profile.name.givenName) return this._profile.name.givenName;
    return '';
  }

  protected getLastName() {
    if (this._profile.name && this._profile.name.familyName) return this._profile.name.familyName;
    return '';
  }

  protected getEmail() {
    if (this._profile.emails && this._profile.emails.length && this._profile.emails[0].value)
      return this._profile.emails[0].value;
    return '';
  }
}
