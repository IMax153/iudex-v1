import React, { useState } from 'react';

import { User } from '../generated/graphql';
import { Page } from '../components/Page';
import { JournalClubForm } from '../components/JournalClubForm';
import { Layout, LayoutColumn } from '../components/Layout';
import { RequireAuth } from '../components/RequireAuth';
import { Tabs } from '../components/Tabs';

interface Props {
  user: Partial<User>;
}

const Forms: React.FC<Props> = ({ user }) => {
  const [selected, setSelected] = useState('Journal Club');
  return (
    <Page title="Evaluation Forms" user={user}>
      <Layout type="dashboard">
        <LayoutColumn>
          <Tabs
            defaultSelected={selected}
            tabs={['Journal Club']}
            onClick={tab => setSelected(tab)}
          />
        </LayoutColumn>
        <LayoutColumn>
          {selected === 'Journal Club' && <JournalClubForm user={user} />}
        </LayoutColumn>
      </Layout>
    </Page>
  );
};

export default RequireAuth(Forms);
