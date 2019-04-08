import gql from 'graphql-tag';

export const ChangePasswordMutation = gql`
  mutation ChangePassword($data: UserChangePasswordInput!) {
    changePassword(data: $data) {
      id
    }
  }
`;
