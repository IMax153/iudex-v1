import { use, serializeUser, deserializeUser, Strategy } from 'passport';
import { FacebookStrategy, GoogleStrategy, TwitterStrategy } from './strategies';

class Passport {
  private _strategies: Strategy[];

  public constructor() {
    this._strategies = [];
  }

  public initialize() {
    serializeUser((user, done) => done(null, user));
    deserializeUser((user, done) => done(null, user));
    this._strategies.forEach(strategy => use(strategy));
  }

  public addStrategy(strategy: Strategy) {
    this._strategies.push(strategy);
  }
}

const passport = new Passport();
passport.addStrategy(FacebookStrategy);
passport.addStrategy(GoogleStrategy);
passport.addStrategy(TwitterStrategy);

export { passport };
export * from './profiles';
export * from './routes';
export * from './strategies';
