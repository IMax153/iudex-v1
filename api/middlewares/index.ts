import { json, Router } from 'express';
import cookieParser from 'cookie-parser';
import { initialize, session as passportSession } from 'passport';

import { cors } from './cors';
import { session } from './session';

const middlewares = Router();

middlewares.use(cors);
middlewares.use(json());
middlewares.use(cookieParser());
middlewares.use(session);
middlewares.use(initialize());
middlewares.use(passportSession());

// Refresh authenticated users expiry time
middlewares.use((req, res, next) => {
  if (req.session && req.session.userId) {
    req.session.lastRequest = Date.now();
  }
  next();
});

export { middlewares };
