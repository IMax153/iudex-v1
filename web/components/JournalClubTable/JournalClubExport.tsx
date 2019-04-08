import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import {
  AllJournalClubsDocument,
  AllJournalClubsQuery,
  AllJournalClubsQueryVariables,
  User,
} from '../../generated/graphql';
import { ExportToExcel } from '../ExportToExcel';

interface ExportToExcelProps {
  user: Partial<User>;
}

const columns = [
  'Article',
  'Evaluator',
  'Preceptor',
  'Resident',
  'Background',
  'Comment',
  'Methods',
  'Comment',
  'Results',
  'Comment',
  'Understanding',
  'Comment',
  'Analysis',
  'Comment',
  'Application',
  'Comment',
  'Conclusions',
  'Comment',
  'Clarity',
  'Comment',
  'Organization',
  'Comment',
  'Grammar',
  'Comment',
  'Response To Questions',
  'Comment',
  'Knows Audience',
  'Comment',
  'Audience Engagment',
  'Comment',
  'Overall',
  'Comment',
  'Created At',
  'Updated At',
];

export const JournalClubExport: React.FC<ExportToExcelProps> = ({ user }) => {
  return (
    <ApolloConsumer>
      {client => (
        <ExportToExcel
          columns={columns}
          fileName="JournalClubEvaluations.xlsx"
          getData={async () => {
            const { data } = await client.query<
              AllJournalClubsQuery,
              AllJournalClubsQueryVariables
            >({
              query: AllJournalClubsDocument,
              variables: {
                where: {
                  OR: [{ preceptor: { id: user.id } }, { evaluator: { id: user.id } }],
                },
              },
            });

            return data.journalClubs;
          }}
        />
      )}
    </ApolloConsumer>
  );
};
