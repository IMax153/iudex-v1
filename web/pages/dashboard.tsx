import React, { useState } from 'react';

import { User } from '../generated/graphql';
import { Layout, LayoutColumn } from '../components/Layout';
import { JournalClubTable } from '../components/JournalClubTable';
import { Page } from '../components/Page';
import { RequireAuth } from '../components/RequireAuth';
import { Tabs } from '../components/Tabs';

interface Props {
  user: Partial<User>;
}

const Testing: React.FC<Props> = ({ user }) => {
  const [selected, setSelected] = useState('Journal Clubs');
  return (
    <Page title="Evaluations" user={user}>
      <Layout type="dashboard">
        <LayoutColumn>
          <Tabs
            defaultSelected={selected}
            tabs={['Journal Clubs']}
            onClick={tab => setSelected(tab)}
          />
        </LayoutColumn>
        <LayoutColumn>
          {selected === 'Journal Clubs' && <JournalClubTable user={user} />}
        </LayoutColumn>
      </Layout>
    </Page>
  );
};

export default RequireAuth(Testing);
