import gql from 'graphql-tag';

import { JournalClubFragment } from '../fragments/journalClub';

export const CreateJournalClubMutation = gql`
  mutation CreateJournalClub($data: JournalClubCreateInput!) {
    createJournalClub(data: $data) {
      id
      ...journalClubFields
    }
  }
  ${JournalClubFragment}
`;
