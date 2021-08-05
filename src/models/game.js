const mongoose = require('./index');

// Create User schema
const gameSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  slides: {
    type: Array,
    required: true,
  },
}, { timestamps: true });
module.exports = mongoose.model('Game', gameSchema);
