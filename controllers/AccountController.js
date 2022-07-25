const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const USER = mongoose.model("users");

exports.account = {
  cloneDeep: function (data) {
    return JSON.parse(JSON.stringify(data))
  },
  login: async (req, res) => {
    const isUserExist = await USER.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if (isUserExist) {
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
    const isCreated = await USER.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    if (isCreated) {
      var token = jwt.sign(req.body, process.env.secret, {
        expiresIn: "24h", // expires in 24 hours
      });
      return res.json({
        isSuccess: true,
        token: token,
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
