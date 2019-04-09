import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import Link from 'next/link';

import { User } from '../../generated/graphql';

interface HeroProps {
  user: Partial<User>;
}
export const Hero: React.FC<HeroProps> = ({ user }) => (
  <Container text>
    <Header
      as="h1"
      color="teal"
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    >
      iudex
    </Header>
    <Header
      as="h2"
      content="Simplifying management of resident evaluations."
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        marginBottom: '1.5em',
      }}
    />

    {user ? null : (
      <Link href="/login" passHref prefetch>
        <Button primary as="a" size="huge">
          Sign In
        </Button>
      </Link>
    )}
  </Container>
);
