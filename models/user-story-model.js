const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema({
firstName:
  {type: String,
  required:true},

lastName:{type: String,},

email:{
  type:String,
  required:true,
  unique:true,
  match:/^.+@.+\..+$/,
},

place:
  {type:String},


  avatar: {
    type: String
  },


});


const Story = mongoose.model("Story",storySchema);


module.exports = Story;