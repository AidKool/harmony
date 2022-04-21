const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  users: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
