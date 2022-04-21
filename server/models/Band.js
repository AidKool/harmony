const mongoose = require('mongoose');
const { Schema } = mongoose;

const bandSchema = new Schema({
  bandName: {
    type: String,
    trim: true,
  },
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
