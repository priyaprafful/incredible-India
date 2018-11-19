const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema({
placeName:
  {type: String,
  required:true},

cityName:{type: String,},

description:
  {type:String},

placeCategory:
  {type:String},

images:

[{type:String}],


});


const City = mongoose.model("City",citySchema);


module.exports = City;