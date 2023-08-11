const mongoose = require('mongoose')
const { Scheme } = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
})