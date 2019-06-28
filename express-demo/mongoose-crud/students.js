const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})

const Schema = mongoose.Schema

module.exports = mongoose.model('Student', new Schema({
    "name": String,
    "gender": {type: Number, enum: [0, 1], default: 0},
    "age": Number,
    "hobbies": String
}))
