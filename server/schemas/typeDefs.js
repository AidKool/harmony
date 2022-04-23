const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Account {
    username: String
    email: String
    password: String
    picture: String
    bio: String
    location: Location
    genres: [String]
    posts: [Post]
    type: String
    musicianId: Musician
    bandId: Band
  }

  type Band {
    bandName: String
  }

  type Musician {
    firstName: String
    lastName: String
    instruments: [String]
    available: Boolean
  }

  type Location {
    longitude: Float
    latitude: Float
    name: String
  }

  type Post {
    title: String
    content: String
    picture: String
    createdAt: String
    accountId: Account
  }

  type Chat {
    users: [Account]
    messages: [Message]
  }

  type Message {
    sender: Account
    receiver: Account
    message: String
    createdAt: String
  }

  type Query {
    getAccount(_id: ID!): Account
    getAllAccounts: [Account]
    getPost(_id: ID!): Post
    getAllPosts: [Post]
    getChat(_id: ID!): Chat
    getAllChats: [Chat]
  }

  type Mutation {
    addAccount(username: String!, email: String!, password: String!, type: String!): Account
    addPost(title: String!, content: String!, accountId: ID!): Post
    addChat(users: [ID]!, messages: [String]): Chat
    addMessage(sender: String!, receiver: String!, message: String!, chatId: ID!): Message
    updateAccount(accountId: ID!, picture: String, bio: String, location: ID, genres: [String]): Account
    updateMusician(
      firstName: String
      lastName: String
      instruments: [String]
      available: Boolean
      musicianId: ID
    ): Musician
    updatePost(title: String, content: String, picture: String, postId: ID): Post
    deletePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
