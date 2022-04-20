const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema ({
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users',    
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message',
        }
    ],
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;