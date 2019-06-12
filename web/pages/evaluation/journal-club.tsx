import React from 'react';
import { NextFC } from 'next';

import {
  User,
  JournalClub as JournalClubType,
  JournalClubComponent,
} from '../../generated/graphql';
import { AppContext } from '../../lib/apollo';
import { redirect } from '../../lib/browser';
import { Layout, LayoutColumn } from '../../components/Layout';
import { Loading } from '../../components/Loading';
import { JournalClubReview } from '../../components/JournalClubReview';
import { Page } from '../../components/Page';
import { RequireAuth } from '../../components/RequireAuth';

interface JournalClubProps {
  id: string;
  user: Partial<User>;
}

const JournalClub: NextFC<JournalClubProps, {}, AppContext> = ({ id, user }) => {
  return (
    <Page title="Journal Club Evaluation" user={user}>
      <Layout type="page">
        <LayoutColumn>
          <JournalClubComponent variables={{ where: { id } }}>
            {({ data, loading, error }) => {
              if (error) return null;
              if (loading || !data || !data.journalClub) return <Loading />;

              const evaluation = data.journalClub as JournalClubType;

              return <JournalClubReview evaluation={evaluation} />;
            }}
          </JournalClubComponent>
        </LayoutColumn>
      </Layout>
    </Page>
  );
};

JournalClub.getInitialProps = async ctx => {
  const { id } = ctx.query;
  if (!id) redirect(ctx, '/dashboard');
  return { id };
};

export default RequireAuth(JournalClub);
