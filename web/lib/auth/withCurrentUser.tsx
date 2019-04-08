import React from 'react';
import { NextComponentType, NextFC } from 'next';

import { User } from '../../generated/graphql';
import { AppContext } from '../apollo';
import { redirect } from '../browser/redirect';
import { getDisplayName } from '../getDisplayName';
import { checkLoggedIn } from './checkLoggedIn';

interface WithCurrentUserProps {
  user: Partial<User>;
}

export function withCurrentUser(Component: NextComponentType<any, any, AppContext>) {
  const WithCurrentUser: NextFC<WithCurrentUserProps, {}, AppContext> = props => {
    return <Component {...props} />;
  };

  WithCurrentUser.displayName = `withCurrentUser(${getDisplayName(Component)})`;

  WithCurrentUser.getInitialProps = async ctx => {
    let componentProps = {};

    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx);
    }

    const { user } = await checkLoggedIn(ctx.apolloClient);

    if (!user) return redirect(ctx, '/login');

    return { ...componentProps, user };
  };

  return WithCurrentUser;
}
