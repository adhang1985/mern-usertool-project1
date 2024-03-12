// const express = require("express");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    email : {
        type : String,
        required: true
    },
    role : {
        type : String
    }
});

const user = new mongoose.model("userManagement", userSchema);

module.exports = user;