import cookieParser from 'cookie-parser';
import { json, Router } from 'express';

import { cors } from './cors';
import { session } from './session';

const middlewares = Router();

middlewares.use(json());
middlewares.use(cookieParser());
middlewares.use(cors);
middlewares.use(session);

// Refresh authenticated users expiry time
middlewares.use((req, res, next) => {
  if (req.session && req.session.userId) {
    req.session.lastRequest = Date.now();
  }
  next();
});

export { middlewares };
