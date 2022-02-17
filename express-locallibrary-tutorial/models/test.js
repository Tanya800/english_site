const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const testScheme = new Schema({
    title: String,
    description: String,
    picture: String,
    words: []
});

module.exports = mongoose.model("Test", testScheme);



