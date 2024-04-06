const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    middleName : {
        type: String,
        required: true
    },
    LastName : {
        type: String,
        required: true
    },
    emailAddress : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', userSchema)