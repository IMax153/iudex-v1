import gql from 'graphql-tag';

import { JournalClubFragment } from '../fragments/journalClub';

export const JournalClub = gql`
  query JournalClub($where: JournalClubWhereUniqueInput!) {
    journalClub(where: $where) {
      ...journalClubFields
    }
  }
  ${JournalClubFragment}
`;
