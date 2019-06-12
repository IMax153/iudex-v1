// import Session from 'cookie-session';
// import Keygrip from 'keygrip';
import Session from 'express-session';
import ConnectRedis from 'connect-redis';

import { createRedis } from '../utils/redis';

const RedisStore = ConnectRedis(Session);

const IS_PROD = process.env.NODE_ENV === 'production';

export const session = Session({
  store: new RedisStore({ client: createRedis() as any }),
  name: 'qid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    domain: IS_PROD ? 'iudex.now.sh' : 'localhost',
    httpOnly: true,
    secure: IS_PROD,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    sameSite: 'lax',
  },
});
