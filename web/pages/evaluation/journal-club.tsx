import React from 'react';
import { NextFC } from 'next';
import { Container, Header, Segment } from 'semantic-ui-react';

import { User } from '../../generated/graphql';
import { AppContext } from '../../lib/apollo';
import { withCurrentUser } from '../../lib/auth/withCurrentUser';
import { JournalClubEvaluation } from '../../components/JournalClubEvaluation';
import { Layout } from '../../components/Layout';

interface JournalClubProps {
  id: string;
  user: Partial<User>;
}

const JournalClub: NextFC<JournalClubProps, {}, AppContext> = ({ id, user }) => {
  return (
    <Layout title="Forms Page" user={user}>
      <Container style={{ marginTop: '1em', marginBottom: '1em' }}>
        <Header as="h1" content="Journal Club Evaluation" color="teal" block />

        <Segment>
          <JournalClubEvaluation id={id} />
        </Segment>
      </Container>
    </Layout>
  );
};

JournalClub.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default withCurrentUser(JournalClub);
