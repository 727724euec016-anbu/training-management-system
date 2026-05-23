const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sessionName: String,
  instructor: String,
  duration: Number,
  category: String,
 price: Number
});

module.exports = mongoose.model('Session', sessionSchema);