import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user 
const register = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({
        message: "User already exists",
      });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new userModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).send({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).send({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};


// login user
const login = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email }).select("+password");
    console.log(user)

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return res.status(404).send({
        message: "Invalid credentials",
      });
    }

    const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1hr",
    });

    res.send({
      message: "Logged in successfully",
      token: token,
    });
  } catch (error) {
    res.status(400).send({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};
const logout = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(400).send({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};
const forgotPassword = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(400).send({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};
const reset = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(400).send({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};

const authController = {
  register,
  login,
  logout,
  reset,
  forgotPassword,
  forgotPassword,
};

export default authController;
