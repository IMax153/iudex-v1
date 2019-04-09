import React, { Fragment, useState } from 'react';
import { Query } from 'react-apollo';
import { Dimmer, Loader, Pagination, Message } from 'semantic-ui-react';

import {
  JournalClubsDocument,
  JournalClubsQuery,
  JournalClubsQueryVariables,
  JournalClubOrderByInput,
  JournalClubsCountDocument,
  JournalClubsCountQuery,
  JournalClubsCountQueryVariables,
  User,
} from '../../generated/graphql';
import { JournalClubExport } from './JournalClubExport';
import { JournalClubDataTable } from './JournalClubDataTable';

interface JournalClubsProps {
  user: Partial<User>;
}

export const JournalClubTable: React.FC<JournalClubsProps> = ({ user }) => {
  const [page, setPage] = useState(1);

  return (
    <Query<JournalClubsCountQuery, JournalClubsCountQueryVariables>
      query={JournalClubsCountDocument}
      variables={{
        where: { OR: [{ evaluator: { id: user.id } }, { preceptor: { id: user.id } }] },
      }}
    >
      {({ data, loading, error }) => {
        if (error) return <div>Error! {error.message}</div>;
        if (loading || !data) {
          return (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          );
        }

        if (data.journalClubsCount === 0) {
          return (
            <Message
              icon="exclamation circle"
              header="You have no evaluations"
              content="Head over to the forms page to start creating evaluations!"
            />
          );
        }

        const totalPages = Math.ceil(data.journalClubsCount / 5);

        return (
          <Query<JournalClubsQuery, JournalClubsQueryVariables>
            query={JournalClubsDocument}
            variables={{
              first: 5,
              skip: (page - 1) * 5,
              orderBy: JournalClubOrderByInput.CreatedAt_Desc,
              where: {
                OR: [{ evaluator: { id: user.id } }, { preceptor: { id: user.id } }],
              },
            }}
          >
            {({ data, loading, error }) => {
              if (error) return <div>Error! {error.message}</div>;
              if (loading || !data || !data.journalClubs) {
                return (
                  <Dimmer active inverted>
                    <Loader inverted content="Loading" />
                  </Dimmer>
                );
              }

              const { journalClubs } = data;

              return (
                <Fragment>
                  <JournalClubDataTable journalClubs={journalClubs} />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Pagination
                      activePage={page}
                      boundaryRange={0}
                      siblingRange={1}
                      ellipsisItem={null}
                      firstItem={null}
                      lastItem={null}
                      totalPages={totalPages}
                      onPageChange={(_, data) => {
                        const activePage = Number(data.activePage) || 1;
                        setPage(activePage);
                      }}
                    />
                    <JournalClubExport user={user} />
                  </div>
                </Fragment>
              );
            }}
          </Query>
        );
      }}
    </Query>
  );
};
