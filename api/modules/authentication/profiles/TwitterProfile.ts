import { Profile as OAuthProfile } from 'passport-twitter';

import { Profile } from './Profile';

export class TwitterProfile extends Profile<OAuthProfile> {
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
      twitterProviderId: this.getID(),
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      email: this.getEmail(),
    };
  }

  protected getFirstName() {
    const name = this.getName();

    if (name) {
      return name.split(' ')[0];
    }

    return '';
  }

  protected getLastName() {
    const name = this.getName();

    if (name) {
      return name.split(' ')[1];
    }

    return '';
  }

  private getName(): string | undefined {
    return (
      this._profile.displayName ||
      this._profile._json.name ||
      this._profile._json.screen_name ||
      this._profile.username ||
      undefined
    );
  }
}
