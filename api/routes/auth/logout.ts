import { Router } from 'express';

import { LogoutRoute } from '../../modules/authentication';

export const logoutRouter = Router();

const logoutRoute = new LogoutRoute();

logoutRouter.get('/', (req, res, next) => logoutRoute.main(req, res, next));
