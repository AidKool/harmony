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
  mutation addPost($title: String!, $content: String!, $picture: String, $accountId: ID!) {
    addPost(title: $title, content: $content, picture: $picture, accountId: $accountId) {
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
  mutation addMessage($sender: String!, $receiver: String!, $message: String!, $chatId: ID!) {
    addMessage(sender: $sender, receiver: $receiver, message: $message, chatId: $chatId) {
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
  mutation updateMusician(
    $firstName: String
    $lastName: String
    $instruments: [String]
    $available: Boolean
    $musicianId: String
  ) {
    updateMusician(
      firstName: $firstName
      lastName: $lastName
      instruments: $instruments
      available: $available
      musicianId: $musicianId
    ) {
      _id
    }
  }
`;

export const UPDATE_BAND = gql`
  mutation updateBand($bandName: String, $bandId: String) {
    updateBand(bandName: $bandName, bandId: $bandId) {
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($title: String, $content: String, $picture: String, $postId: ID!) {
    updatePost(title: $title, content: $content, picture: $picture, postId: $postId) {
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

export const SET_DONATED_TRUE = gql`
  mutation setDonatedTrue {
    setDonatedTrue {
      donated
    }
  }
`;

export const SET_DONATED_SILVER = gql`
  mutation setDonatedSilver {
    setDonatedSilver {
      silver
    }
  }
`;

export const SET_DONATED_BRONZE = gql`
  mutation setDonatedBronze {
    setDonatedBronze {
      bronze
    }
  }
`;
