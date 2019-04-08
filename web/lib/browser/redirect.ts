import { NextContext } from 'next';
import Router from 'next/router';

export function redirect(ctx: NextContext | undefined, target: string) {
  if (ctx && ctx.res) {
    // server
    // 303: "See other"
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    // browser
    Router.replace(target);
  }
}
