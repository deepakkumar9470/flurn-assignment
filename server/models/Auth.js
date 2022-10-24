const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: true
    },
    email  : {
        type: String,
        required: [true, 'Please enter email'],
        unique :true,
        lowercase : true,
    },
    password  : {
        type: String,
        required: [true, 'Please enter a valid password'],
        
    },
   
},{timestamps : true})



module.exports = mongoose.model('Auth', AuthSchema)
