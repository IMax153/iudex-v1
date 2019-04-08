import React from 'react';
import Link from 'next/link';
import { Grid, Header, Message } from 'semantic-ui-react';

import { RegisterForm } from './RegisterForm';

export const RegisterBox: React.FC = () => {
  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign up to create a new account
        </Header>

        <RegisterForm />

        <Message>
          <span style={{ marginRight: '10px' }}>Already have an account?</span>{' '}
          <Link href="/login" passHref>
            <a href="#">Sign In</a>
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
