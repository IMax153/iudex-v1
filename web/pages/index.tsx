import React from 'react';
import { NextFC } from 'next';

import { User } from '../generated/graphql';
import { AppContext } from '../lib/apollo';
import { checkLoggedIn } from '../lib/auth/checkLoggedIn';
import { HomePage } from '../components/Home';

interface IndexProps {
  user: Partial<User>;
}

const Index: NextFC<IndexProps, {}, AppContext> = ({ user }) => {
  return <HomePage user={user} />;
};

Index.getInitialProps = async ctx => {
  const { user } = await checkLoggedIn(ctx.apolloClient);

  return { user };
};

export default Index;
