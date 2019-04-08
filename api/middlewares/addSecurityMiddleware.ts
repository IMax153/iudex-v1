import { Application } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';

export function addSecurityMiddleware(server: Application) {
  // don't expose any software information to hackers
  server.disable('x-powered-by');

  // prevent HTTP Parameter pollution
  server.use(hpp());

  // xssFilter middleware sets the X-XSS-Protection header to prevent reflected XSS attacks
  // @see https://helmetjs.github.io/docs/xss-filter/
  server.use(helmet.xssFilter());

  // frameguard mitigates clickjacking attacks by setting the X-Frame-Options header
  // @see https://helmetjs.github.io/docs/frameguard/
  server.use(helmet.frameguard({ action: 'deny' }));

  // sets the X-Download-Options to prevent Internet Explorer from executing downloads in your site’s context
  // @see https://helmetjs.github.io/docs/ienoopen/
  server.use(helmet.ieNoOpen());

  // don’t Sniff Mimetype middleware, noSniff, helps prevent browsers from trying
  // to guess (“sniff”) the MIME type, which can have security implications. It
  // does this by setting the X-Content-Type-Options header to nosniff.
  // @see https://helmetjs.github.io/docs/dont-sniff-mimetype/
  server.use(helmet.noSniff());
}
