const express = require('express');

const router = express.Router();

const {
  getUsers, createUser, findUserByUid, findUserByUidAndAddDisplayName,
} = require('./src/controllers/user');
const {
  getGames, addGame, findGameById, editGame,
} = require('./src/controllers/game');

router.get('/', getUsers);
router.post('/register', createUser);
router.get('/login/:uid', findUserByUid);
router.put('/update/:uid', findUserByUidAndAddDisplayName);
router.get('/games', getGames);
router.post('/games', addGame);
router.get('/games/:id', findGameById);
router.put('/games/:id', editGame);

module.exports = router;
