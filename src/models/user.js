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
    required: false,
  },
  photoURL: {
    type: String,
    required: false,
  },
  emailVerified: {
    type: Boolean,
    required: true,
  },
  observations: {
    type: Array,
    require: false,
  },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
