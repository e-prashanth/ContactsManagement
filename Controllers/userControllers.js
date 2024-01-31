const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypy = require("bcrypt");
const jwt = require('jsonwebtoken');
const registerUser = asyncHandler(async function (req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.json({ message: "please enter all the data" });
    throw new Error("Invalid request");
  }
  const userAvailable = await userModel.findOne({ email });
  if (userAvailable) {
    res.json({ message: "the user already exists" });
    throw new Error("the user already exists");
  } else {
    const hashedpassword = await bcrypy.hash(password, 10);
    console.log(hashedpassword);
    const newuser = await userModel.create({
      username,
      email,
      password: hashedpassword,
    });
    if (newuser) {
      res
        .status(201)
        .json({
          message: "created the user successfully",
          id: newuser._id,
          username: newuser.username,
          email: username.email,
        });
    }
    else{
        throw new  Error("Error creating a User");
    }
  }
});

const loginUser = asyncHandler(async function (req, res) {
  
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ message: "details of the current user" });
});
module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};
