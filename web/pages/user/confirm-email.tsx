import React from 'react';
import { NextFC } from 'next';
import Link from 'next/link';
import { Grid, Header, Segment, Message, Icon } from 'semantic-ui-react';

import {
  ConfirmUserMutation,
  ConfirmUserMutationVariables,
  ConfirmUserDocument,
} from '../../generated/graphql';
import { AppContext } from '../../lib/apollo';
import { Layout } from '../../components/Layout';

interface ConfirmProps {
  confirmed: boolean;
  token?: string;
}

const ConfirmEmail: NextFC<ConfirmProps, {}, AppContext> = ({ confirmed }) => {
  return (
    <Layout title="Confirm User Page">
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 600 }}>
          <Segment>
            <Header icon as="h1" color="teal" textAlign="center">
              <Icon name="users" circular />
              {confirmed ? (
                <Header.Content>Successfully Confirmed Email!</Header.Content>
              ) : (
                <Header.Content>Check your email to confirm registration</Header.Content>
              )}
            </Header>

            {confirmed && (
              <Message size="big">
                <Link href="/login" prefetch passHref>
                  <a href="#">Login to continue</a>
                </Link>
              </Message>
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

ConfirmEmail.getInitialProps = async ({ apolloClient, query }) => {
  const { token } = query;

  if (!token) return { confirmed: false };

  try {
    const response = await apolloClient.mutate<ConfirmUserMutation, ConfirmUserMutationVariables>({
      mutation: ConfirmUserDocument,
      variables: { data: { token: token as string } },
    });

    if (response.data && response.data.confirmUser && response.data.confirmUser.emailConfirmed) {
      return { confirmed: true };
    }

    return { confirmed: false };
  } catch (error) {
    return { confirmed: false };
  }
};

export default ConfirmEmail;
