import gql from 'graphql-tag';

export const JournalClubs = gql`
  query JournalClubs(
    $where: JournalClubWhereInput
    $orderBy: JournalClubOrderByInput
    $first: Int
    $after: String
    $skip: Int
  ) {
    journalClubsConnection(
      where: $where
      orderBy: $orderBy
      first: $first
      after: $after
      skip: $skip
    ) {
      aggregate {
        count
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          article
          createdAt
          updatedAt
          resident {
            id
            fullName
          }
          evaluator {
            id
            fullName
          }
          preceptor {
            id
            fullName
          }
          overall {
            comment
            competency
          }
        }
      }
    }
  }
`;
