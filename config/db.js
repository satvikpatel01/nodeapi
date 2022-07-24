const mongoose = require("mongoose");

require("../models/AccountSchema");
require("../models/StudentSchema");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));

db.once("open", function () {
  console.log("Database connected successfully!");
});
