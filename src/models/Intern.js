const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const intern = new mongoose.Schema( {
    name: { 
        required:true,
        type:String,
        trim: true
   },
   email: {
    required:true,
    unique:true,
    type:String,
    trim: true
},

  mobile:{
      type:Number,
      required:true,
      unique:true,
      trim: true,
      match : [/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, 'please provide valid movile number'],
  },
    collegeId: {
          type:ObjectId,
          required:true,
          trim: true,
          ref:"College"
    },
    isDeleted: { 
        type:Boolean,
         default: false 
        },

}, { timestamps: true });   
module.exports = mongoose.model('InternModel', intern)