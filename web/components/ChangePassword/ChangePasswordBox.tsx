import React, { Fragment } from 'react';
import { Grid, Header, Segment, Icon } from 'semantic-ui-react';

import { ChangePasswordForm } from './ChangePasswordForm';

interface ChangePasswordBoxProps {
  token?: string;
}

export const ChangePasswordBox: React.FC<ChangePasswordBoxProps> = ({ token }) => {
  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 600 }}>
        {token ? (
          <Fragment>
            <Header as="h2" color="teal" textAlign="center">
              Change Password
            </Header>
            <ChangePasswordForm token={token} />
          </Fragment>
        ) : (
          <Segment>
            <Header icon as="h1" color="teal" textAlign="center">
              <Icon name="users" circular />
              <Header.Content>Check your email to change password</Header.Content>
            </Header>
          </Segment>
        )}
      </Grid.Column>
    </Grid>
  );
};
