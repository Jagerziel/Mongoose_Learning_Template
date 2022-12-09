//importing Mongoose Library
const { validateHeaderValue } = require('http')
const mongoose = require('../db/connection.js')

//How to write class for Mongodb
const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    isTall: Boolean,
    hobbies: [hobbies],
    dob: Date,
    favSongLyrics: {lyrics: String},
    favNumber: Number
})

//Set up Author under Schema setup
const Author = mongoose.model('Author', authorSchema)

module.exports = Author

