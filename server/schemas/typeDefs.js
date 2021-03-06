const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Account {
    _id: String
    username: String
    email: String
    password: String
    picture: String
    bio: String
    location: Location
    genres: [String]
    posts: [Post]
    miles: Int
    type: String
    musicianId: Musician
    bandId: Band
    donated: Boolean
    silver: Boolean
    bronze: Boolean
  }

  type Auth {
    token: ID!
    account: Account
  }

  type Band {
    _id: ID
    bandName: String
  }

  type Musician {
    _id: ID
    firstName: String
    lastName: String
    instruments: [String]
    available: Boolean
    preferredRole: [String]
  }

  type Location {
    longitude: Float
    latitude: Float
    name: String
  }

  type Post {
    _id: ID
    title: String
    content: String
    picture: String
    createdAt: String
    accountId: Account
  }

  type Chat {
    _id: ID
    users: [Account]
    messages: [Message]
  }

  type Message {
    _id: ID
    sender: Account
    receiver: Account
    message: String
    createdAt: String
  }

  type Query {
    me: Account
    getAccount(_id: ID!): Account
    getAllAccounts: [Account]
    getAccountsByDistance(location: String!, miles: Int!): [Account]
    getPost(_id: ID!): Post
    getAllPosts: [Post]
    getMyPosts: [Post]
    getChat(_id: ID!): Chat
    getAllChats: [Chat]
    getUserChats: [Chat]
  }

  type Mutation {
    addAccount(username: String!, email: String!, password: String!, type: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, content: String!, picture: String, accountId: ID!): Post
    addChat(_id: ID!): Chat
    addMessage(sender: String!, receiver: String!, message: String!, chatId: ID!): Message
    updateAccount(picture: String, bio: String, location: ID, genres: [String]): Account
    updateMusician(
      firstName: String
      lastName: String
      instruments: [String]
      available: Boolean
      musicianId: String
    ): Musician
    updateBand(bandName: String, bandId: String): Band
    updatePost(title: String, content: String, picture: String, postId: ID!): Post
    deletePost(postId: ID!): Post
    setDonatedTrue(donated: Boolean): Account
    setDonatedSilver(silver: Boolean): Account
    setDonatedBronze(bronze: Boolean): Account
  }
`;

module.exports = typeDefs;
