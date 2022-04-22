const db = require('../config/connection');
const { Account, Location, Musician, Band, Message, Chat, Post } = require('../models');
const accountSeeds = require('./accountSeeds.json');
const locationSeeds = require('./locationSeeds.json');
const musicianSeeds = require('./musicianSeeds.json');
const bandSeeds = require('./bandSeeds.json');
const messageSeeds = require('./messageSeeds.json');
const chatSeeds = require('./chatSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  await Location.deleteMany({});
  await Location.create(locationSeeds);
  await Musician.deleteMany({});
  await Musician.create(musicianSeeds);
  await Band.deleteMany({});
  await Band.create(bandSeeds);
  await Account.deleteMany({});
  await Account.create(accountSeeds);
  await Message.deleteMany({});
  await Message.create(messageSeeds);
  await Chat.deleteMany({});
  await Chat.create(chatSeeds);
  await Post.deleteMany({});
  await Post.create(postSeeds);

  console.log('all done!');
  process.exit(0);
});
