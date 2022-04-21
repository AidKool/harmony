const { Schema, model } = require('mongoose');

const musicianSchema = new Schema({
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
  instruments: [String],
  preferredRole: [String],
  available: {
    type: Boolean,
  },
});

const Musician = model('Musician', musicianSchema);

module.exports = Musician;
