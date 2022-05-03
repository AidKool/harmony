import { gql } from '@apollo/client';

export const ADD_ACCOUNT = gql`
  mutation addAccount($username: String!, $email: String!, $password: String!, $type: String!) {
    addAccount(username: $username, email: $email, password: $password, type: $type) {
      token
      account {
        _id
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      account {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String!) {
    addPost(title: $title, content: $content) {
      title
      content
      picture
      createdAt
    }
  }
`;

export const ADD_CHAT = gql`
  mutation addChat($user: [ID]!) {
    addChat(user: $user) {
      users {
        _id
        username
      }
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($sender: String!, $receiver: String!, $message: String!) {
    addMessage(sender: $sender, receiver: $receiver, message: $message) {
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
`;

export const UPDATE_ACCOUNT = gql`
  mutation updateAccount($picture: String, $bio: String, $location: ID, $genres: [String]) {
    updateAccount(picture: $picture, bio: $bio, location: $location, genres: $genres) {
      _id
    }
  }
`;

export const UPDATE_MUSICIAN = gql`
  mutation updateMusician($firstName: String, $lastName: String, $instruments: [String], $available: Boolean, $musicianId: String) {
    updateMusician(firstName: $firstName, lastName: $lastName, instruments: $instruments, available: $available, musicianId: $musicianId) {
      _id
    }
  }
`;

export const UPDATE_BAND = gql`
  mutation updateBand($bandName: String) {
    updateBand(bandName: $bandName) {
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($title: String, $content: String, $picture: String) {
    updatePost(title: $title, content: $content, picture: $picture) {
      _id
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      _id
    }
  }
`;
