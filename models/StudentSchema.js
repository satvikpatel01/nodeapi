const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName : {
        type : String,
        default : "",
        trim : true
    },
    lastName : {
        type : String,
        default : "",
        trim : true
    },
    hobbies : {
        type : String,
        default : "",
        trim : true
    },
    gender : {
        type : String,
        default : "",
        trim : true
    },
    city : {
        type : String,
        default : "",
        trim : true
    },
    age : {
        type : Number,
        default : "",
        trim : true
    },
    createdAt : {
        type : String,
        default : "",
        trim : true
    },
    updatedAt : {
        type : String,
        default : "",
        trim : true
    },
    __v : {
        type : Number,
        default : "",
        trim : true
    },
});

const student = mongoose.model("student",StudentSchema)
module.exports = student;