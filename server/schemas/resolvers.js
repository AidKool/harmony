const { UserInputError } = require('apollo-server-express');
const { Account, Musician, Band, Chat, Location, Message, Post } = require('../models');

const resolvers = {
  Query: {
    getAccount: async (parent, { _id }) => {
      return Account.findOne({ _id }).populate('location', 'posts', 'musicianId', 'bandId');
    },
    getAllAccounts: async () => {
      return Account.find().populate('location', 'posts', 'musicianId', 'bandId');
    },
    getPost: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    getAllPosts: async () => {
      return Post.find();
    },
    getChat: async (parent, { _id }) => {
      return Chat.findOne({ _id }).populate('messages');
    },
    getAllChats: async () => {
      return Chat.find();
    },
  },
  Mutation: {
    addAccount: async (parent, { username, email, password, type }, context) => {
      try {
        const account = await Account.create({ username, email, password, type });
        if (type === 'Musician') {
          const musician = await Musician.create({});
          account.musicianId = musician._id;
          await account.save();
        } else if (type === 'Band') {
          const band = await Band.create({});
          account.bandId = band._id;
          await account.save();
        }
        return account;
      } catch (error) {
        console.error(error.message);
      }
    },
    addPost: async (parent, { title, content, accountId }, context) => {
      try {
        const post = await Post.create({ title, content, accountId });
        await Account.findOneAndUpdate({ _id: accountId }, { $addToSet: { posts: post._id } });
        return post;
      } catch (error) {
        console.error(error.message);
      }
    },
    addChat: async (parent, { users }, context) => {
      try {
        const chat = await Chat.create({ users });
        return chat;
      } catch (error) {
        console.error(error.message);
      }
    },
    addMessage: async (parent, { sender, receiver, message, chatId }, context) => {
      try {
        const newMessage = await Message.create({ sender, receiver, message });
        await Chat.findOneAndUpdate({ _id: chatId }, { $addToSet: { messages: newMessage._id } });
        return newMessage;
      } catch (error) {
        console.error(error.message);
      }
    },
    updateAccount: async (parent, { picture, bio, location, genres, accountId }, context) => {
      try {
        const updatedAccount = await Account.findOneAndUpdate(
          { _id: accountId },
          {
            picture,
            bio,
            location,
            genres,
          }
        );
        return updatedAccount;
      } catch (error) {
        console.error(error.message);
      }
    },
    updateMusician: async (parent, { firstName, lastName, instruments, available, musicianId }, context) => {
      try {
        const updatedMusician = await Musician.findOneAndUpdate(
          { _id: musicianId },
          {
            firstName,
            lastName,
            instruments,
            available,
          }
        );
        return updatedMusician;
      } catch (error) {
        console.error(error.message);
      }
    },
    updatePost: async (parent, { title, content, picture, postId }, context) => {
      try {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          {
            title,
            content,
            picture,
          }
        );
        return updatedPost;
      } catch (error) {
        console.error(error.message);
      }
    },
    deletePost: async (parent, { postId }, context) => {
      try {
        const deletePost = await Post.deleteOne({ _id: postId });
        return deletePost;
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};

module.exports = resolvers;
