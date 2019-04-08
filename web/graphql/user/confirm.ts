import gql from 'graphql-tag';

export const ConfirmUserMutation = gql`
  mutation ConfirmUser($data: UserConfirmInput!) {
    confirmUser(data: $data) {
      id
      fullName
      email
      emailConfirmed
    }
  }
`;
