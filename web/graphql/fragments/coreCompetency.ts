import gql from 'graphql-tag';

export const CoreCompetencyFragment = gql`
  fragment coreCompetencyFields on CoreCompetency {
    competency
    comment
  }
`;
