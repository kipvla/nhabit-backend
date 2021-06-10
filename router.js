const express = require('express');

const router = express.Router();

const {
  getUsers, createUser, findUserByUid, findUserByUidAndAddDisplayName,
} = require('./src/controllers/user');

router.get('/', getUsers);
router.post('/register', createUser);
router.get('/login/:uid', findUserByUid);
router.put('/update/:uid', findUserByUidAndAddDisplayName);

module.exports = router;
