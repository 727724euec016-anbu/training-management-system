const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    session:{
        type:String,
        required:true
    },

    joiningDate:{
    type:String
},

completionDate:{
    type:String
},

attendance:{
    type:String,
    default:'Absent'
}

});

module.exports =
mongoose.model('Participant',
participantSchema);