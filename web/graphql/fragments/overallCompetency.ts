import gql from 'graphql-tag';

export const OverallCompetencyFragment = gql`
  fragment overallCompetencyFields on OverallCompetency {
    competency
    comment
  }
`;
