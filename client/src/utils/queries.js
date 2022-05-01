import { gql } from '@apollo/client';

export const QUERY_ACCOUNTS = gql`
  query getAllAccounts {
    getAllAccounts {
      username
      email
      picture
      bio
      donated
      silver
      bronze
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
      picture
      donated
      silver
      bronze
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
      _id
      title
      content
      picture
      createdAt
      accountId {
        musicianId {
          _id
        }
        bandId {
          _id
        }
        _id
        username
        picture
        donated
        silver
        bronze
      }
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
