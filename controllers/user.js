const User = require('../models/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
