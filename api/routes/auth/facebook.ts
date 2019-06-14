import { Router } from 'express';

import { LoginRoute } from '../../modules/authentication';

export const facebookRouter = Router();

const facebookLoginRoute = new LoginRoute('facebook', { scope: ['email'] });

facebookRouter.get('/', (req, res, next) => facebookLoginRoute.main(req, res, next));
facebookRouter.get('/callback', facebookLoginRoute.authMiddleware(), (req, res, next) =>
  facebookLoginRoute.callbacks(req, res, next),
);
