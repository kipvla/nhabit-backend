const Game = require('../models/game');

exports.getGames = async (req, res) => {
  try {
    const games = await Game.find();
    console.log(games);
    res.status(200);
    res.send(games);
  } catch (error) {
    console.log(error);
  }
};

exports.addGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    console.log(newGame);
    res.status(201);
    res.send(newGame);
  } catch (error) {
    res.send(error);
  }
};
