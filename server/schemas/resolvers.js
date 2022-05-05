const { AuthenticationError } = require('apollo-server-express');
const { Account, Musician, Band, Chat, Location, Message, Post } = require('../models');
const { where } = require('../models/Post');
const { signToken } = require('../utils/auth');
const calculateDistance = require('../utils/calculateDistance');
const getCityCoordinates = require('../utils/getCityCoordinates');

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        const userData = await Account.findById(context.user._id);
        return userData;
      }
      throw new AuthenticationError('You must log in');
    },
    getAccount: async (parent, { _id }) => {
      return Account.findById(_id).populate(['location', 'posts', 'musicianId', 'bandId']);
    },
    getAllAccounts: async () => {
      return Account.find().populate(['location', 'posts', 'musicianId', 'bandId']);
    },
    getAccountsByDistance: async (parent, { location, miles }) => {
      let origin = await Location.findOne({ name: location });

      if (origin === null) {
        origin = await getCityCoordinates(location);
        origin.name = location;
      }

      const originCoords = {
        longitude: origin.longitude,
        latitude: origin.latitude,
      };
      return (await Account.find().populate(['location', 'posts', 'musicianId', 'bandId'])).filter((account) => {
        const destCoords = {
          longitude: account.location.longitude,
          latitude: account.location.latitude,
        };
        const usersDistance = calculateDistance(originCoords, destCoords);
        account.miles = Math.round(usersDistance);
        return usersDistance <= miles;
      });
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
    getMyPosts: async (parent, args, context) => {
      const myPosts = Post.find({ accountId: context.user._id }).populate({
        path: 'accountId',
        populate: { path: 'musicianId', model: 'Musician' },
      });
      return myPosts;
    },
    getChat: async (parent, { _id }, context) => {
      return Chat.findById(_id)
        .populate({ path: 'messages', populate: ['sender', 'receiver'] })
        .populate(['users']);
    },
    getAllChats: async () => {
      return Chat.find().populate(['users', 'messages']);
    },
    getUserChats: async (parent, args, context) => {
      if (context.user) {
        return Chat.find({ users: context.user._id }).populate(['users']);
      }
      throw new AuthenticationError('You must log in');
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
    addPost: async (parent, { title, content, picture, accountId }, context) => {
      if (context.user) {
        const post = await Post.create({ title, content, picture, accountId });
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
    updateMusician: async (parent, { firstName, lastName, instruments, available, musicianId }, context) => {
      if (context.user) {
        console.log(context.user);
        console.log(musicianId);
        const updatedMusician = await Musician.findByIdAndUpdate(musicianId, {
          firstName,
          lastName,
          instruments,
          available,
        });
        return updatedMusician;
      }
      throw new AuthenticationError('You must be logged in');
    },
    updateBand: async (parent, { bandName, bandId }, context) => {
      if (context.user) {
        const updatedBand = await Band.findByIdAndUpdate(bandId, {
          bandName,
        });
        return updatedBand;
      }
      throw new AuthenticationError('You must be logged in');
    },
    updatePost: async (parent, { title, content, picture, postId }, context) => {
      if (context.user) {
        const updatedPost = await Post.findByIdAndUpdate(postId, {
          title,
          content,
          picture,
        });
        return updatedPost;
      }
      throw new AuthenticationError('You must be logged in');
    },
    deletePost: async (parent, { postId }, context) => {
      if (context.user) {
        const deletePost = await Post.findByIdAndDelete(postId);
        await Account.findByIdAndUpdate(context.user._id, { $pull: { posts: postId } });
        return deletePost;
      }
      throw new AuthenticationError('You must be logged in');
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
    setDonatedSilver: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }
      const setDonatedSilver = await Account.findByIdAndUpdate(
        context.user._id,
        {
          silver: true,
        },
        { new: true }
      );
      return setDonatedSilver;
    },
    setDonatedBronze: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }
      const setDonatedBronze = await Account.findByIdAndUpdate(
        context.user._id,
        {
          bronze: true,
        },
        { new: true }
      );
      return setDonatedBronze;
    },
  },
};

module.exports = resolvers;
