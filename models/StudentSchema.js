const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
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

const student = mongoose.model("student", StudentSchema)
module.exports = student;