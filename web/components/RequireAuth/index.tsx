import React, { useEffect } from 'react';
import { NextComponentType, NextFC } from 'next';

import { User } from '../../generated/graphql';
import { AppContext } from '../../lib/apollo';
import { getCurrentUser } from '../../lib/auth';
import { redirect } from '../../lib/browser';
import { getDisplayName } from '../../lib/utils';

interface WithCurrentUserProps {
  user: Partial<User>;
}

export const RequireAuth = (Component: NextComponentType<any, any, AppContext>) => {
  const Auth: NextFC<WithCurrentUserProps, {}, AppContext> = props => {
    function syncLogout(e: StorageEvent) {
      if (e.key === 'logout') {
        redirect(undefined, '/');
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout);

      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    });

    return <Component {...props} />;
  };

  Auth.displayName = `RequireAuth(${getDisplayName(Component)})`;

  Auth.getInitialProps = async ctx => {
    const { user } = await getCurrentUser(ctx.apolloClient);

    if (!user) {
      return redirect(ctx, '/');
    }

    if (!user.position && ctx.pathname !== '/profile') {
      return redirect(ctx, '/profile');
    }

    let componentProps = {};

    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx);
    }

    return { ...componentProps, user };
  };

  return Auth;
};
