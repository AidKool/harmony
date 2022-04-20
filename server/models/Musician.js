const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const musicianSchema = new Schema({
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
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
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

  instruments: [String],
  preferredRole: [String],
  genres: [String],
  available: {
    type: Boolean,
  },
});

// Set up pre-save middleware to create password
musicianSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
musicianSchema.methods.isCorrectPassword = async function (password) {
  await bcrypt.compare(password, this.password);
};

const Musician = model('Musician', musicianSchema);

module.exports = Musician;
