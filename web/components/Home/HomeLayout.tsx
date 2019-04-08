import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Dropdown, Icon, Menu, Segment, Visibility } from 'semantic-ui-react';

import { User, LogoutComponent } from '../../generated/graphql';
import { redirect } from '../../lib/browser/redirect';
import { Hero } from './Hero';

interface HomeLayoutProps {
  user: Partial<User>;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children, user }) => {
  const [fixed, setFixed] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              {/* Left Nav Group */}
              <Menu.Item header>
                <Icon name="dna" />
                iudex
              </Menu.Item>

              {user && (
                <Fragment>
                  <Link href="/" passHref>
                    <Menu.Item as="a" active>
                      Home
                    </Menu.Item>
                  </Link>

                  <Link href="/dashboard" passHref>
                    <Menu.Item as="a">Dashboard</Menu.Item>
                  </Link>

                  <Link href="/forms" passHref>
                    <Menu.Item as="a">Forms</Menu.Item>
                  </Link>

                  {/* Right Nav Group */}
                  <LogoutComponent>
                    {(logoutMutation, { client }) => (
                      <Dropdown item text={user.email} className="right" pointing="top">
                        <Dropdown.Menu>
                          <Dropdown.Header>Actions</Dropdown.Header>
                          <Dropdown.Item
                            onClick={async () => {
                              await logoutMutation();
                              await client.cache.reset();
                              redirect(undefined, '/');
                            }}
                          >
                            <Icon name="sign-out" />
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
                  </LogoutComponent>
                </Fragment>
              )}
            </Container>
          </Menu>

          {/* Hero */}
          <Hero user={user} />
        </Segment>
      </Visibility>

      {/* Children */}
      {children}
    </Fragment>
  );
};
