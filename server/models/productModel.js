const mongoose = require("mongoose");

const { catogorySchema } = require("./catogoryModel");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  catogory: {
    type: [catogorySchema],
  },

  catogories: {
    type: [catogorySchema],
  },
});

const ProductModel = mongoose.model("Product", productSchema);

exports.Product = ProductModel;
