import gql from 'graphql-tag';

import { CoreCompetencyFragment } from './coreCompetency';
import { OverallCompetencyFragment } from './overallCompetency';

export const JournalClubFragment = gql`
  fragment journalClubFields on JournalClub {
    article
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
    background {
      ...coreCompetencyFields
    }
    methods {
      ...coreCompetencyFields
    }
    results {
      ...coreCompetencyFields
    }
    understanding {
      ...coreCompetencyFields
    }
    analysis {
      ...coreCompetencyFields
    }
    application {
      ...coreCompetencyFields
    }
    conclusions {
      ...coreCompetencyFields
    }
    clarity {
      ...coreCompetencyFields
    }
    organization {
      ...coreCompetencyFields
    }
    grammar {
      ...coreCompetencyFields
    }
    responseToQuestions {
      ...coreCompetencyFields
    }
    knowsAudience {
      ...coreCompetencyFields
    }
    audienceEngagement {
      ...coreCompetencyFields
    }
    overall {
      ...overallCompetencyFields
    }
    createdAt
    updatedAt
  }
  ${CoreCompetencyFragment}
  ${OverallCompetencyFragment}
`;
