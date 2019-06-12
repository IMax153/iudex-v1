import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import {
  AllJournalClubsDocument,
  AllJournalClubsQuery,
  AllJournalClubsQueryVariables,
  User,
  JournalClub,
} from '../../../generated/graphql';
import { ExportToExcel, Sheet } from '../../ExportToExcel';
import { JournalClubRecord } from '../JournalClubRecord';

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

export const JournalClubDataExport: React.FC<ExportToExcelProps> = ({ user }) => {
  return (
    <ApolloConsumer>
      {client => (
        <ExportToExcel
          fileName="JournalClubEvaluations"
          getSheets={async () => {
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

            const records = data.journalClubs.map(
              journalClub => new JournalClubRecord(journalClub as JournalClub),
            );

            const sheet = Sheet.create(columns, records, 'JournalClubEvaluations');

            return [sheet.value];
          }}
        />
      )}
    </ApolloConsumer>
  );
};
