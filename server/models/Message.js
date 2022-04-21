const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
  },
  message: {
    type: Schema.Types.ObjectId,
    ref: 'Message',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;