import gql from 'graphql-tag';

import { UserFragment } from '../fragments/user';

export const MeQuery = gql`
  query Me {
    me {
      ...userFields
    }
  }
  ${UserFragment}
`;
