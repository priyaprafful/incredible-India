const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foodName: { type: String, required: true },

  type: { type: String },

  description: { type: String },

  category: { type: String },

  images: [{ type: String }]
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
