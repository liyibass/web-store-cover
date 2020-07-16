const mongoose = require("mongoose");

const catogorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const CatogoryModel = mongoose.model("catogory", catogorySchema);

// module.exports = catogory;
exports.catogorySchema = catogorySchema;
exports.Catogory = CatogoryModel;
