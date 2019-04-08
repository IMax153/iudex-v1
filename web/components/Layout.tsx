import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter, WithRouterProps } from 'next/router';
import { Button, Container, Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
import { capitalize } from 'lodash';

import { LogoutComponent, User } from '../generated/graphql';
import { redirect } from '../lib/browser/redirect';

interface LayoutProps {
  title?: string;
  user?: Partial<User>;
}

const BaseLayout: React.FC<LayoutProps & WithRouterProps> = ({
  children,
  router,
  title = 'This is the default title',
  user,
}) => {
  const path = router && capitalize(router.pathname.replace('/', ''));

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <Segment style={{ height: '100vh', padding: '50px 0' }} vertical>
        <Menu fixed="top" size="large" inverted>
          <Container>
            {/* Left Nav Group */}
            <Menu.Item header>
              <Icon name="dna" />
              iudex
            </Menu.Item>

            <Link href="/" passHref>
              <Menu.Item as="a">Home</Menu.Item>
            </Link>

            {user ? (
              <Fragment>
                <Link href="/dashboard" passHref>
                  <Menu.Item as="a" active={path === 'Dashboard'}>
                    Dashboard
                  </Menu.Item>
                </Link>

                <Link href="/forms" passHref>
                  <Menu.Item as="a" active={path === 'Forms'}>
                    Forms
                  </Menu.Item>
                </Link>

                {/* Right Nav Group */}
                <LogoutComponent>
                  {(logoutMutation, { client }) => (
                    <Dropdown item text={user.email} className="right" pointing="top">
                      <Dropdown.Menu>
                        <Dropdown.Header>Actions</Dropdown.Header>
                        <Dropdown.Item
                          onClick={async () => {
                            try {
                              await logoutMutation();
                              await client.cache.reset();
                              redirect(undefined, '/login');
                            } catch (error) {
                              console.log(error);
                            }
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
            ) : (
              <Menu.Item position="right">
                <Link href="/login" passHref>
                  <Button as="a">Log In</Button>
                </Link>

                <Link href="/register" passHref>
                  <Button as="a" primary style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Link>
              </Menu.Item>
            )}
          </Container>
        </Menu>
        <div style={{ height: '100%' }}>{children}</div>
      </Segment>
    </div>
  );
};

export const Layout = withRouter(BaseLayout);
