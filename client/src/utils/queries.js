import { gql } from '@apollo/client';

export const QUERY_ACCOUNTS = gql`
  query getAllAccounts {
    getAllAccounts {
      username
      email
      password
      picture
      bio
    }
  }
`;

export const QUERY_SINGLE_ACCOUNT = gql`
  query getSingleAccount($id: ID!) {
    getAccount(_id: $id) {
      username
      email
      type
      bio
    }
  }
`;

