const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    description : {
        type: String
    },
    myFile : {
        type: String
    }

});

module.exports = mongoose.model('Post', postSchema);