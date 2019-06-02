import gql from 'graphql-tag';

export const LoginMutation = gql`
  mutation Login($data: UserLoginInput!) {
    login(data: $data) {
      user {
        id
        fullName
        email
        position
      }
      token
    }
  }
`;