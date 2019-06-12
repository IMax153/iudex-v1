import { Profile as OAuthProfile } from 'passport';

export abstract class Profile {
  protected _profile: OAuthProfile;

  public constructor(profile: OAuthProfile) {
    this._profile = profile;
  }

  public create() {
    return {
      googleProviderId: this.getID(),
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      email: this.getEmail(),
    };
  }

  public abstract getID(): string;
  protected abstract getFirstName(): string;
  protected abstract getLastName(): string;
  protected abstract getEmail(): string;
}
