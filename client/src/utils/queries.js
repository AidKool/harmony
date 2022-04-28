import { gql } from '@apollo/client';

export const QUERY_ACCOUNTS = gql`
  query getAllAccounts {
    getAllAccounts {
      username
      email
      picture
      bio
    }
  }
`;

export const QUERY_ACOUNTS_BY_DISTANCE = gql`
  query getAccountsByDistance($location: String!, $miles: Int!) {
    getAccountsByDistance {
      username
      email
      picture
      bio
      type
      location {
        name
      }
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
      location {
        name
      }
      genres
      posts {
        title
        content
        picture
        createdAt
      }
      musicianId {
        firstName
        lastName
        instruments
        preferredRole
        available
      }
      bandId {
        bandName
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      title
      content
      picture
      createdAt
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query getPost($id: ID!) {
    getPost(_id: $id) {
      title
      content
      picture
      createdAt
    }
  }
`;

export const GET_CHATS = gql`
  query getAllChats {
    getAllChats {
      users {
        username
        _id
        picture
      }
    }
  }
`;
