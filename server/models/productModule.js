const mongoose = require("mongoose");
const ProductSchema = {
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["mobile", "laptop", "tv", "accessories ", "console"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availability: {
    type: Number,
    default: 1,
  },
  rating: {
    type: Number,
  },
  photoUrl: {
    type: String,
    required: true,
  },
};

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
