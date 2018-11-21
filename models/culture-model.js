const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cultureSchema = new Schema({
  festivalName: { type: String, required: true },

  Mounth: { type: String },

  description: { type: String },

  category: { type: String },

  images: [{ type: String }],

  reviews: [
    {
      firstName: { type: String, required: true },
      comments: { type: String, required: true, maxlength: 200 }
    }
  ]
});

const Culture = mongoose.model("Culture", cultureSchema);

module.exports = Culture;
