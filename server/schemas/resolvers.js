const { AuthenticationError } = require('apollo-server-express');
const { Account, Musician, Band, Chat, Location, Message, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getAccount: async (parent, { _id }) => {
      return Account.findById(_id).populate(['location', 'posts', 'musicianId', 'bandId']);
    },
    getAllAccounts: async () => {
      return Account.find().populate(['location', 'posts', 'musicianId', 'bandId']);
    },
    getPost: async (parent, { _id }) => {
      return Post.findById(_id);
    },
    getAllPosts: async () => {
      const posts = await Post.find().populate({
        path: 'accountId',
        populate: { path: 'musicianId', model: 'Musician' },
      });
      return posts;
    },
    getChat: async (parent, { _id }) => {
      return Chat.findById(_id).populate(['users', 'messages']);
    },
    getAllChats: async () => {
      return Chat.find().populate(['users', 'messages']);
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
        const token = signToken(account);
        return { token, account };
      } catch (error) {
        console.error(error.message);
      }
    },
    login: async (parent, { email, password }) => {
      const account = await Account.findOne({ email });
      if (!account) {
        throw new AuthenticationError('Invalid credentials');
      }
      const correctPw = await account.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Credentials invalid');
      }
      const token = signToken(account);
      return { token, account };
    },
    addPost: async (parent, { title, content }, context) => {
      if (context.user) {
        const post = await Post.create({ title, content });
        await Account.findByIdAndUpdate(context.user._id, { $addToSet: { posts: post._id } });
        return post;
      }
      throw new AuthenticationError('You must be logged in');
    },
    addChat: async (parent, { user }, context) => {
      if (context.user) {
        const ids = [context.user._id, user._id];
        const chat = await Chat.create(ids);
        return chat;
      }
      throw new AuthenticationError('You must be logged in');
    },
    addMessage: async (parent, { sender, receiver, message }, context) => {
      if (context.user) {
        const newMessage = await Message.create({ sender, receiver, message });
        await Chat.findByIdAndUpdate(context.chat._id, { $addToSet: { messages: newMessage._id } });
        return newMessage;
      }
      throw new AuthenticationError('You must be logged in');
    },
    updateAccount: async (parent, { picture, bio, location, genres }, context) => {
      if (context.user) {
        const updatedAccount = await Account.findByIdAndUpdate(context.user._id, {
          picture,
          bio,
          location,
          genres,
        });
        return updatedAccount;
      }
      throw new AuthenticationError('You must be logged in');
    },
    updateMusician: async (parent, { firstName, lastName, instruments, available }, context) => {
      if (context.user) {
        const updatedMusician = await Musician.findByIdAndUpdate(context.user.musicianId, {
          firstName,
          lastName,
          instruments,
          available,
        });
        return updatedMusician;
      }
      throw new AuthenticationError('You must be logged in');
    },
    updateBand: async (parent, { bandName }, context) => {
      if (context.user) {
        const updatedBand = await Band.findByIdAndUpdate(context.user.bandId, {
          bandName,
        });
        return updatedBand;
      }
      throw new AuthenticationError('You must be logged in');
    },
    updatePost: async (parent, { title, content, picture }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }
      if (context.post.accountId === context.user._id) {
        const updatedPost = await Post.findByIdAndUpdate(context.post._id, {
          title,
          content,
          picture,
        });
        return updatedPost;
      }
      throw new AuthenticationError('You can only update your own posts');
    },
    deletePost: async (parent, { postId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }
      if (context.post.accountId === context.user._id) {
        const deletePost = await Post.findByIdAndDelete(postId);
        await Account.findByIdAndUpdate(context.user._id, { $pull: { posts: postId } });
        return deletePost;
      }
      throw new AuthenticationError('You can only delete your own posts');
    },
    setDonatedTrue: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }
      const setDonatedTrue = await Account.findByIdAndUpdate(
        context.user._id,
        {
          donated: true,
        },
        { new: true }
      );
      return setDonatedTrue;
    },
  },
};

module.exports = resolvers;
