import React from 'react';
import { NextFC } from 'next';

import styled from '../styles';
import { User } from '../generated/graphql';
import { AppContext } from '../lib/apollo';
import { getCurrentUser } from '../lib/auth';
import { Heading } from '../components/Heading';
import { LoginButtonGroup } from '../components/LoginButtonGroup';
import { Page } from '../components/Page';

interface IndexProps {
  user: Partial<User>;
}

const Hero = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.base.palette.ink.normal};
`;

const LoginButtonContainer = styled.div`
  margin: ${({ theme }) => theme.base.spacing.xxl};
`;

const Index: NextFC<IndexProps, {}, AppContext> = ({ user }) => {
  return (
    <Page title="Home" user={user}>
      <Hero>
        <Heading type="display" color="brand">
          iudex
        </Heading>
        <Heading type="title2" color="white">
          Simplifying management of resident evaluations.
        </Heading>
        <LoginButtonContainer>{!user && <LoginButtonGroup />}</LoginButtonContainer>
      </Hero>
    </Page>
  );
};

Index.getInitialProps = async ctx => {
  const { user } = await getCurrentUser(ctx.apolloClient);
  const { query } = ctx;

  return { query, user };
};

export default Index;
