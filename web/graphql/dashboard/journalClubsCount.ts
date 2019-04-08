import gql from 'graphql-tag';

export const JournalClubsCount = gql`
  query JournalClubsCount($where: JournalClubWhereInput!) {
    journalClubsCount(where: $where)
  }
`;
