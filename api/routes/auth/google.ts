import { Router } from 'express';

import { LoginRoute } from '../../modules/authentication';

export const googleRouter = Router();

const googleLoginRoute = new LoginRoute('google', { scope: 'profile email' });

googleRouter.get('/', (req, res, next) => googleLoginRoute.main(req, res, next));
googleRouter.get('/callback', googleLoginRoute.authMiddleware(), (req, res, next) =>
  googleLoginRoute.callbacks(req, res, next),
);
