import gql from 'graphql-tag';

import { UserFragment } from '../fragments/user';

export const SetUserPosition = gql`
  mutation SetUserPosition($data: SetUserPositionInput!) {
    setUserPosition(data: $data) {
      ...userFields
    }
  }
  ${UserFragment}
`;
