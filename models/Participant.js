const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  participantName: String,
  email: String,
  phone: String,
  enrolledSession: String,
  joiningDate: String,
 completionDate: String,
  attendance: String
});

module.exports = mongoose.model('Participant', participantSchema);