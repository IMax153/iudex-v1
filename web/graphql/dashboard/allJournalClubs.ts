import gql from 'graphql-tag';

import { JournalClubFragment } from '../fragments/journalClub';

export const AllJournalClubs = gql`
  query AllJournalClubs($where: JournalClubWhereInput) {
    journalClubs(where: $where) {
      ...journalClubFields
    }
  }
  ${JournalClubFragment}
`;
