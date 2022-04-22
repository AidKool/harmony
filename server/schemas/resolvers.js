const { Account, Musician, Band, Chat, Location, Message, Post } = require('../models');

const resolvers = {
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
  },
};

module.exports = resolvers;
