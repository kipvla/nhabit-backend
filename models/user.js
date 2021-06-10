const mongoose = require('./index');

// Create User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
