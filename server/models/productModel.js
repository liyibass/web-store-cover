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
});

const productModel = mongoose.model("Product", productSchema);

exports.Product = productModel;
