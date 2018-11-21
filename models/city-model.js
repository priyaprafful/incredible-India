const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema({
  placeName: { type: String, required: true },

  cityName: { type: String },

  description: { type: String },

  placeCategory: { type: String },

  images: [{ type: String }],

  reviews: [
    {
      firstName: { type: String, required: true },
      comments: { type: String, required: true, maxlength: 200 }
    }
  ]
});

const City = mongoose.model("City", citySchema);

module.exports = City;
