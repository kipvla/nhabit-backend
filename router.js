const express = require('express');

const router = express.Router();

const { getUsers, createUser, findUserByUid } = require('./src/controllers/user');

router.get('/', getUsers);
router.post('/register', createUser);
router.get('/login/:uid', findUserByUid);

module.exports = router;
