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
    debugger;
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.findUserByUid = async (req, res) => {
  try {
    const { uid } = req.params;
    const foundUser = await User.findOne({ uid });
    console.log(uid, foundUser);
    res.status(200);
    res.send(foundUser);
  } catch (error) {
    console.log(error);
  }
};

exports.findUserByUidAndAddDisplayName = async (req, res) => {
  try {
    const { uid } = req.params;
    console.log('UID is ', uid);
    const { displayName } = req.body;
    const updatedUser = await User.findOneAndUpdate({ uid }, { displayName }, (err, user) => {
      if (err) console.log(err);
      return user;
    });
    console.log(updatedUser);
    res.send(updatedUser);
    res.status(204);
  } catch (error) {
    console.log(error);
  }
};
