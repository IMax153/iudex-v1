import React from 'react';
import { NextFC } from 'next';

import { AppContext } from '../lib/apollo';
import { checkLoggedIn } from '../lib/auth/checkLoggedIn';
import { redirect } from '../lib/browser/redirect';
import { Layout } from '../components/Layout';
import { RegisterBox } from '../components/Register';

const Register: NextFC<{}, {}, AppContext> = () => {
  return (
    <Layout title="Signup Page">
      <RegisterBox />
    </Layout>
  );
};

Register.getInitialProps = async ctx => {
  const { user } = await checkLoggedIn(ctx.apolloClient);

  if (user) return redirect(ctx, '/dashboard');

  return {};
};

export default Register;
