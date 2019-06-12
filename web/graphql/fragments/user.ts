import gql from 'graphql-tag';

export const UserFragment = gql`
  fragment userFields on User {
    id
    fullName
    firstName
    lastName
    email
    position
    createdAt
    updatedAt
  }
`;
