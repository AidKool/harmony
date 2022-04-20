const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  musician: {
    type: Schema.Types.ObjectId,
    ref: 'Musician',
  },
  Band: {
    type: Schema.Types.ObjectId,
    ref: 'Band',
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
