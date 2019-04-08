import gql from 'graphql-tag';

import { JournalClubFragment } from '../fragments/journalClub';

export const JournalClubEvaluation = gql`
  query JournalClubEvaluation($where: JournalClubWhereUniqueInput!) {
    journalClub(where: $where) {
      ...journalClubFields
    }
  }
  ${JournalClubFragment}
`;
