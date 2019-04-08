import gql from 'graphql-tag';

export const ForgotPasswordMutation = gql`
  mutation ForgotPassword($data: UserForgotPasswordInput!) {
    forgotPassword(data: $data)
  }
`;
