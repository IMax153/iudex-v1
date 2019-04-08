import gql from 'graphql-tag';

import { CoreCompetencyFragment } from '../fragments/coreCompetency';
import { OverallCompetencyFragment } from '../fragments/overallCompetency';

export const JournalClubs = gql`
  query JournalClubs(
    $where: JournalClubWhereInput
    $orderBy: JournalClubOrderByInput
    $first: Int
    $after: String
    $skip: Int
  ) {
    journalClubs(where: $where, orderBy: $orderBy, first: $first, after: $after, skip: $skip) {
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
        ...overallCompetencyFields
      }
    }
  }
  ${CoreCompetencyFragment}
  ${OverallCompetencyFragment}
`;
