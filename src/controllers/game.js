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
    console.error(error);
    res.status(500);
    res.send(error);
  }
};

exports.findGameById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const foundGame = await Game.findOne({ _id });
    console.log(_id, { foundGame });
    res.status(200);
    res.send(foundGame);
  } catch (error) {
    console.log(error);
  }
};

exports.editGame = async (req, res) => {
  try {
    console.log('hello from editGame');
    const { id } = req.params;
    const { slides } = req.body;
    const editedGame = await Game.findOneAndUpdate({ _id: id }, { slides }, (err, game) => {
      if (err) console.log(err);
      return game;
    });
    console.log(editedGame);
    res.send(editedGame);
    res.status(204);
  } catch (error) {
    console.log(error);
  }
};
