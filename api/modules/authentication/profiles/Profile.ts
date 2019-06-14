export abstract class Profile<T> {
  protected _profile: T;

  public constructor(profile: T) {
    this._profile = profile;
  }

  public abstract getID(): string;
  public abstract getEmail(): string;
  protected abstract getFirstName(): string;
  protected abstract getLastName(): string;
}
