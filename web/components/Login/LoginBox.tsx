import React from 'react';
import Link from 'next/link';
import { Grid, Header, Message } from 'semantic-ui-react';

import { LoginForm } from './LoginForm';

export const LoginBox: React.FC = () => {
  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Login to your account
        </Header>

        <LoginForm />

        <Message>
          <span style={{ marginRight: '10px' }}>Don&apos;t have an account?</span>{' '}
          <Link href="/register" passHref prefetch>
            <a href="#">Sign Up</a>
          </Link>
        </Message>

        <Message>
          <Link href="/user/forgot-password" passHref prefetch>
            <a href="#">Forgot password</a>
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
