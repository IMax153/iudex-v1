import { Request, Response, NextFunction } from 'express';
import { authenticate, AuthenticateOptions } from 'passport';
import { URL } from 'url';

type Strategy = 'google' | 'twitter' | 'facebook';

export class LoginRoute {
  private _strategy: Strategy;
  private _options: AuthenticateOptions;
  private _redirectUrl: URL;

  public constructor(strategy: Strategy, options?: AuthenticateOptions) {
    this._strategy = strategy;
    this._options = options || {};

    const redirectUrl =
      process.env.NODE_ENV === 'production' ? 'https://iudex.now.sh' : 'http://localhost:3000';
    this._redirectUrl = new URL(redirectUrl);
  }

  public main(req: Request, res: Response, next: NextFunction) {
    const url = this.getRedirectUrl(req);
    if (req.session) {
      req.session.redirectUrl = url.href;
      return authenticate(this._strategy, this._options)(req, res, next);
    }

    throw new Error('Unable to find user session');
  }

  public authMiddleware() {
    return authenticate(this._strategy, {
      ...this._options,
      failureRedirect: this._redirectUrl.href,
    });
  }

  public callbacks(req: Request, res: Response, next: NextFunction) {
    const redirectUrl = this._redirectUrl;

    if (req.authInfo && req.authInfo.message) {
      redirectUrl.searchParams.append('notificationType', 'error');
      redirectUrl.searchParams.append('notificationMessage', req.authInfo.message);
    }

    if (req.session) req.session.redirectUrl = undefined;

    res.redirect(redirectUrl.href);
  }

  private getRedirectUrl(req: Request) {
    return this.hasRedirectUrl(req) ? new URL(req.query.r) : this._redirectUrl;
  }

  private hasRedirectUrl(req: Request) {
    return typeof req.query.r === 'string';
  }
}
