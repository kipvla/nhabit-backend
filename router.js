const express = require('express');

const router = express.Router();

const {
  getUsers, createUser, findUserByUid, findUserByUidAndAddDisplayName, getGames, addGame
} = require('./src/controllers/user');

router.get('/', getUsers);
router.post('/register', createUser);
router.get('/login/:uid', findUserByUid);
router.put('/update/:uid', findUserByUidAndAddDisplayName);
router.get('/games', getGames);
router.post('/games', addGame);
// router.put('/games/:id', editGame);

module.exports = router;
