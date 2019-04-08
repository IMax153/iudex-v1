import { parse } from 'cookie';
import { IncomingMessage } from 'http';

export function parseCookies(req?: IncomingMessage | undefined, options = {}) {
  return parse(req ? req.headers.cookie || '' : document.cookie, options);
}
