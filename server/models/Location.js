const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
