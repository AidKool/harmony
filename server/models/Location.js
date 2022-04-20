const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  longitude: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  latitude: {
    type: mongoose.Types.Decimal128,
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
