require('dotenv').config();
const mongoose = require('mongoose');
const User = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body; // Extract username and password from request body
    
    let checkUser = await User.findOne({ username });
    if (checkUser) {
      return res.status(409).send({ msg: `User with username ${username} already exists` });
    } else {
      let hashPassword = await bcrypt.hash(password, 10);
      let newUser = await User.create({ username, password: hashPassword });
      return res.status(201).send({ msg: "Registered successfully", newUser });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error in registration:", error });
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body; // Extract username and password from request body
    
    let checkUser = await User.findOne({ username });
    if (!checkUser) {
      return res.status(404).send({ msg: "No such user found." });
    } else {
      let validatePassword = await bcrypt.compare(password, checkUser.password);
      if (!validatePassword) {
        return res.status(401).send({ msg: "Invalid Password" });
      }

      const payload = {
        userId: checkUser._id,
        username: checkUser.username,
      };
      
      let token = jwt.sign(payload, "privateKey");
      res.send(token);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  signUp,
  login,
}
