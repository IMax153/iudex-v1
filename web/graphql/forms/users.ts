import gql from 'graphql-tag';

export const UsersQuery = gql`
  query Users($where: UserWhereInput!, $orderBy: UserOrderByInput!) {
    users(where: $where, orderBy: $orderBy) {
      id
      fullName
    }
  }
`;
