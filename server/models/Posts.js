const mongoose = require('mongoose');
const { Schema } = mongoose;

const dateFormat = require('../utils/dateFormat');

const postsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
});

const Posts = model('Posts', postsSchema);

module.exports = Posts;
