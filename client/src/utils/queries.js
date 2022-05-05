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

export const QUERY_ACOUNTS_BY_DISTANCE = gql`
  query getAccountsByDistance($location: String!, $miles: Int!) {
    getAccountsByDistance(location: $location, miles: $miles) {
      _id
      username
      email
      picture
      bio
      type
      genres
      location {
        name
      }
      miles
      musicianId {
        _id
        firstName
        lastName
        instruments
        available
      }
      bandId {
        _id
        bandName
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
        _id
        firstName
        lastName
        instruments
        preferredRole
        available
      }
      bandId {
        _id
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

export const GET_MY_POSTS = gql`
  query getMyPosts {
    getMyPosts {
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

export const GET_CHAT = gql`
  query getChat($id: ID!) {
    getChat(_id: $id) {
      _id
      users {
        _id
        username
        picture
      }
      messages {
        _id
        sender {
          _id
          username
        }
        receiver {
          _id
          username
        }
        message
        createdAt
      }
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

export const GET_USER_CHATS = gql`
  query getUserChats {
    getUserChats {
      _id
      users {
        username
        _id
        picture
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      picture
    }
  }
`;
