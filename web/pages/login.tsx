import React from 'react';
import { NextFC } from 'next';

import { AppContext } from '../lib/apollo';
import { checkLoggedIn } from '../lib/auth/checkLoggedIn';
import { redirect } from '../lib/browser/redirect';
import { Layout } from '../components/Layout';
import { LoginBox } from '../components/Login';

const Login: NextFC<{}, {}, AppContext> = () => {
  return (
    <Layout title="Login Page">
      <LoginBox />
    </Layout>
  );
};

Login.getInitialProps = async ctx => {
  const { user } = await checkLoggedIn(ctx.apolloClient);

  if (user) return redirect(ctx, '/dashboard');

  return {};
};

export default Login;
