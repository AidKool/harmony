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

  type Auth {
    token: ID!
    account: Account
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
    login(email: String!, password: String!): Auth
    addPost(title: String!, content: String!): Post
    addChat(user: [ID]!, messages: [String]): Chat
    addMessage(sender: String!, receiver: String!, message: String!): Message
    updateAccount(picture: String, bio: String, location: ID, genres: [String]): Account
    updateMusician(firstName: String, lastName: String, instruments: [String], available: Boolean): Musician
    updateBand(bandName: String): Band
    updatePost(title: String, content: String, picture: String): Post
    deletePost: Post
  }
`;

module.exports = typeDefs;
