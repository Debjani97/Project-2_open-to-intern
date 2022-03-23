const mongoose = require('mongoose');

const college = new mongoose.Schema( {
    name: {
         required:true,
         unique:true,
         type:String,
         trim:true,
         lowercase: true
},
    fullName: {
        required:true,
        unique:true,
        trim:true,
        type:String
},
    logoLink: {
            type:String,
            required:true
        },
    isDeleted:{
            type:Boolean,
            default:false
        }

}, { timestamps: true });   
   
module.exports = mongoose.model('collegeModel', college)