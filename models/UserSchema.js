const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: "",
    },
    lastName: {
        type: String,
        trim: true,
        default: "",

    },
    hobbies: {
        type: String,
        trim: true,
        default: "",
    },
    gender: {
        type: String,
        trim: true,
        default: "",
    },
    city: {
        type: String,
        trim: true,
        default: "",
    },
    age: {
        type: Number,
        trim: true,
        default: 0,
    }
},{
    timestamps:true
});

const User = mongoose.model("User", UserSchema)
module.exports = User;