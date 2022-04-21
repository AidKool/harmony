const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = require('./Account');

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
  updatedOn: { 
    type: Date,
    default: Date.now
     },
  user: {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Account' },
    required: true
  }
});

const Posts = model('Posts', postsSchema);

module.exports = Posts;
