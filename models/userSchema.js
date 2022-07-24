const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
    trim: true,
  },
  lastName: {
    type: String,
    default: "",
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const user = mongoose.model("users", UserSchema);
module.exports = user;
