import gql from 'graphql-tag';

export const RegisterMutation = gql`
  mutation Register($data: UserRegisterInput!) {
    register(data: $data) {
      id
      fullName
      email
      position
    }
  }
`;
