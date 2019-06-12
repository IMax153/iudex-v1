import { Request, Response, NextFunction } from 'express';
import { URL } from 'url';

export class LogoutRoute {
  private _redirectUrl: URL;

  public constructor() {
    const redirectUrl =
      process.env.NODE_ENV === 'production' ? 'https://iudex.now.sh' : 'http://localhost:3000';
    this._redirectUrl = new URL(redirectUrl);
  }

  public main(req: Request, res: Response, next: NextFunction) {
    req.logout();
    return res.redirect(this._redirectUrl.href);
  }
}
