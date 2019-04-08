import React from 'react';
import Link from 'next/link';
import { Grid, Header, Message } from 'semantic-ui-react';

import { ForgotPasswordForm } from './ForgotPasswordForm';

export const ForgotPasswordBox: React.FC = () => {
  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Enter your email to change password
        </Header>

        <ForgotPasswordForm />

        <Message>
          <Link href="/login" passHref>
            <a href="#">Back to Login</a>
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
