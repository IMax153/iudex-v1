import { remove, set } from 'js-cookie';

import { redirect } from '../browser/redirect';

interface LoginOptions {
  token: string;
  tokenName?: string;
  redirectTo?: string;
}

interface LogoutOptions {
  tokenName?: string;
  redirectTo?: string;
}

export function login({ token, tokenName = 'qid', redirectTo = '/dashboard' }: LoginOptions): void {
  set(tokenName, token);
  redirect(undefined, redirectTo);
}

export function logout({ tokenName = 'qid', redirectTo = '/login' }: LogoutOptions): void {
  remove(tokenName);
  window.localStorage.setItem('logout', Date.now().toString());
  redirect(undefined, redirectTo);
}
