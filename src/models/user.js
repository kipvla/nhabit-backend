const mongoose = require('./index');

// Create User schema
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
