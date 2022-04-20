const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema({
  sender: {
    
  },
  receiver: {
    
  },
  message: {
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;