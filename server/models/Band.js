const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const bandSchema = new Schema({
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
  bandName: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  genres: [String],
  currentMembers: [String],
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  await bcrypt.compare(password, this.password);
};

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
