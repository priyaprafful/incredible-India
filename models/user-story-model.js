const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  user: {type:String, ref:"User",required:true},
  writerName:{type:String},
  title:{type:String},
  description: {type:String},
  place:{type:String},
  avatar: {type: String},
 });

const Story = mongoose.model("Story",storySchema);

module.exports = Story;