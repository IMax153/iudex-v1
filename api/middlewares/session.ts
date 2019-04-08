import Session from 'express-session';
import ConnectRedis from 'connect-redis';

import { redis } from '../utils/redis';

const RedisStore = ConnectRedis(Session);

export const session = Session({
  store: new RedisStore({ client: redis as any }),
  name: 'qid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    sameSite: 'lax',
  },
});
