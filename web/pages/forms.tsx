import React, { useState } from 'react';
import { NextFC } from 'next';
import { Container, Grid, Header, Menu } from 'semantic-ui-react';

import { User } from '../generated/graphql';
import { AppContext } from '../lib/apollo';
import { withCurrentUser } from '../lib/auth/withCurrentUser';
import { Layout } from '../components/Layout';
import { JournalClubForm } from '../components/JournalClubForm';

interface DashboardProps {
  tab: string;
  user: Partial<User>;
}
const Dashboard: NextFC<DashboardProps, {}, AppContext> = ({ tab = 'Journal Club', user }) => {
  const [activeItem, setActiveItem] = useState(tab);

  return (
    <Layout title="Forms Page" user={user}>
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1" content="Forms" color="teal" block />

        <Grid stretched>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="Journal Club"
                active={activeItem === 'Journal Club'}
                onClick={(_, { name }) => name && setActiveItem(name)}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={13}>
            {activeItem === 'Journal Club' && <JournalClubForm user={user} />}
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
