const mongoose = require('./index');

// Create User schema
const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
