const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URL;
console.log('URI IS', uri);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  serverSelectionTimeoutMS: 2000,
}).then(() => console.log('Connected'), (err) => console.log(err));

console.log('after connection');

module.exports = mongoose;
