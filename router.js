const express = require('express');

const router = express.Router();

const { getUsers, createUser } = require('./src/controllers/user');

router.get('/', getUsers);
router.post('/register', createUser);

module.exports = router;
