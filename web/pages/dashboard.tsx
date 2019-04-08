import React, { useState } from 'react';
import { NextFC } from 'next';
import { Container, Grid, Header, Menu } from 'semantic-ui-react';

import { User } from '../generated/graphql';
import { AppContext } from '../lib/apollo';
import { withCurrentUser } from '../lib/auth/withCurrentUser';
import { JournalClubTable } from '../components/JournalClubTable';
import { Layout } from '../components/Layout';

interface DashboardProps {
  tab: string;
  user: Partial<User>;
}
const Dashboard: NextFC<DashboardProps, {}, AppContext> = ({ tab = 'Journal Clubs', user }) => {
  const [activeItem, setActiveItem] = useState(tab);

  return (
    <Layout title="Dashboard Page" user={user}>
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1" content="Dashboard" color="teal" block />

        <Grid stretched>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="Journal Clubs"
                active={activeItem === 'Journal Clubs'}
                onClick={(_, { name }) => name && setActiveItem(name)}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={13}>
            {activeItem === 'Journal Clubs' && <JournalClubTable user={user} />}
          </Grid.Column>

          <Grid.Column />
        </Grid>
      </Container>
    </Layout>
  );
};

Dashboard.getInitialProps = async ({ query }) => {
  const { tab } = query;
  return { tab };
};

export default withCurrentUser(Dashboard);
