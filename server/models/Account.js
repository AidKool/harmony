const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/, 'Add a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  picture: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
  },
  genres: [String],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  type: {
    type: String,
    enum: ['Band', 'Musician'],
    default: 'Musician',
    required: true,
  },
  musicianId: {
    type: Schema.Types.ObjectId,
    ref: 'Musician',
  },
  bandId: {
    type: Schema.Types.ObjectId,
    ref: 'Band',
  },
  donated: {
    type: Boolean,
    default: false
  },
});

// Set up pre-save middleware to create password
accountSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
accountSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
