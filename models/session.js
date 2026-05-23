const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({

    sessionName: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    category: {
        type: String
    },

    price: {
        type: Number
    }

});

module.exports = mongoose.model('Session', sessionSchema);