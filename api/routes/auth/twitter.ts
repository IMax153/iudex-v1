import { Router } from 'express';

import { LoginRoute } from '../../modules/authentication';

export const twitterRouter = Router();

const twitterLoginRoute = new LoginRoute('twitter');

twitterRouter.get('/', (req, res, next) => twitterLoginRoute.main(req, res, next));
twitterRouter.get('/callback', twitterLoginRoute.authMiddleware(), (req, res, next) =>
  twitterLoginRoute.callbacks(req, res, next),
);
