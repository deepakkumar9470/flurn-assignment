const mongoose = require('mongoose')

const LeaveSchema = new mongoose.Schema({
    startDate  : {
        type: Date,
    },
    endDate  : {
        type: Date,
    },
    reason : { 
        type : String
    }
  
  
    
},{timestamps : true})

module.exports = mongoose.model('Leave', LeaveSchema)