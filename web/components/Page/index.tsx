import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter, WithRouterProps } from 'next/router';

import { User } from '../../generated/graphql';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { List, ListItem, ListChoice } from '../List';
import { NavBar, NavLink } from '../NavBar';
import { NotificationProvider } from '../Notification';
import { Sidebar } from '../Sidebar';
import { Stack } from '../Stack';
import { QueryParamNotifications } from './QueryParamNotifications';

interface LayoutProps {
  query?: Record<string, string>;
  title?: string;
  user?: Partial<User>;
}

const PageBase: React.FC<LayoutProps & WithRouterProps> = ({
  children,
  router,
  query,
  title = 'This is the default title',
  user,
}) => {
  let path;
  if (router) {
    path = router.pathname === '/' ? '/' : router.pathname.replace('/', '');
  }

  const linkGroupLeft = (
    <React.Fragment>
      <Link href="/" passHref>
        <NavLink active={path === '/'}>Home</NavLink>
      </Link>
      {user && (
        <React.Fragment>
          <Link href="/dashboard" passHref>
            <NavLink active={path === 'dashboard'}>Dashboard</NavLink>
          </Link>
          <Link href="/forms" passHref>
            <NavLink active={path === 'forms'}>Forms</NavLink>
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );

  const linkGroupRight = user ? (
    <Sidebar>
      <List>
        <Link href="/profile" passHref>
          <ListChoice icon={<Icon icon="cogs" />} title="Profile" />
        </Link>
        <ListItem>
          <Stack direction="row" align="center">
            <Button
              type="primary"
              icon={<Icon icon="sign-out-alt" color="brand" />}
              href={
                process.env.NODE_ENV === 'production'
                  ? 'https://iudex.now.sh/api/auth/logout'
                  : 'http://localhost:4000/api/auth/logout'
              }
              bordered
              block
            >
              Logout
            </Button>
          </Stack>
        </ListItem>
      </List>
    </Sidebar>
  ) : null;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <NavBar
        title="Iudex"
        logo={<Icon icon="clipboard-check" size="medium" color="white" />}
        linkGroupLeft={linkGroupLeft}
        linkGroupRight={linkGroupRight}
        inverted
      />

      <NotificationProvider
        autoDismissTimeout={5000}
        placement="bottom-right"
        transitionDuration={220}
      >
        {query && <QueryParamNotifications query={query} />}

        {children}
      </NotificationProvider>
    </React.Fragment>
  );
};

export const Page = withRouter(PageBase);
