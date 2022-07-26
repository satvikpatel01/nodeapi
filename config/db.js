const mongoose = require("mongoose");

require("../models/AccountSchema");
require("../models/StudentSchema");
require("../models/UserSchema");
require("../models/ProductSchema");
mongoose.Promise = global.Promise;
mongoose.set('debug',(collectionName, method,query,doc)=>{
  console.log(`${collectionName}.${method}`,JSON.stringify(query),doc)
})

mongoose.connect(process.env.connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));

db.once("open", function () {
  console.log("Database connected successfully!");
});
