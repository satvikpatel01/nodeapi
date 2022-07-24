const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const USER = mongoose.model("users");

exports.account = {
  login: (req, res) => {
    if (req.body.userName == "test" && req.body.password == "123") {
      var token = jwt.sign(req.body, process.env.secret, {
        expiresIn: "24h", // expires in 24 hours
      });
      return res.json({
        isSuccess: true,
        data: {
          token: token,
        },
      });
    }
    return res.json({
      isSuccess: false,
      message: "Username or password is not correct",
    });
  },
  register: async (req, res) => {
    try {
      const isUserExist = await USER.findOne({
        email: req.body.email,
      });
      if (isUserExist) {
        return res.json({
          isSuccess: false,
          message: "User already exist with this email",
        });
      }
      const isCreated = await USER.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      if (isCreated) {
        return res.json({
          isSuccess: true,
          message: "User created successfully",
        });
      }
      return res.json({
        isSuccess: false,
        message: "Failed to create user",
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        message: "Failed to create user",
        error: error,
      });
    }
  },
};
