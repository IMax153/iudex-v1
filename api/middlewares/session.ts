import Session from 'cookie-session';
import Keygrip from 'keygrip';

export const session = Session({
  keys: new Keygrip([process.env.SESSION_SECRET]) as any,
  name: 'qid',
  secure: process.env.NODE_ENV === 'production',
  // This is refresh everytime a user does a request
  // @see api/middleware/index.ts
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days,
  signed: true,
  sameSite: 'lax',
});
