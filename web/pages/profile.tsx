import React from 'react';

import { User } from '../generated/graphql';
import { Layout, LayoutColumn } from '../components/Layout';
import { Page } from '../components/Page';
import { CompleteRegistrationForm } from '../components/CompleteRegistrationForm';
import { RequireAuth } from '../components/RequireAuth';

interface Props {
  user: Partial<User>;
}

const Profile: React.FC<Props> = ({ user }) => {
  const title = `${user.fullName}'s Profile`;
  const subtitle = user.position
    ? 'Review your profile below'
    : 'Complete registration by selecting your position below';

  return (
    <Page title="Profile" user={user}>
      <Layout type="page">
        <LayoutColumn>
          <CompleteRegistrationForm title={title} subtitle={subtitle} user={user} />
        </LayoutColumn>
      </Layout>
    </Page>
  );
};

export default RequireAuth(Profile);
