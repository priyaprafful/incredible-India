const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName:{

    type:String,
    required:true,
    minlength:2,

  },
lastName:{

    type:String,
    required:true,
    minlength:2,

  },

  email:{
    type:String,
    required:true,
    unique:true,
    match:/^.+@.+\..+$/,
  },
  encryptedPassword:{type:String},
role:{
  type:String,
  enum:["normal","admin"],
  required:true,
  default:"normal",
},
},{
  timestamps:true

});


const User = mongoose.model("User",userSchema);

module.exports = User;