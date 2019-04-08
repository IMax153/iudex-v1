import gql from 'graphql-tag';

export const MeQuery = gql`
  query Me {
    me {
      id
      fullName
      email
      position
      createdAt
      updatedAt
    }
  }
`;
