const express = require('express');

const app = express();

const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const router = require('./router');

const { PORT } = process.env;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);
app.use('*', (req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
