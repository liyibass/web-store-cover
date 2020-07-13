const mongoose = require("mongoose");

const catogorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const catogoryModel = mongoose.model("Catogory", catogorySchema);

// module.exports = Catogory;
exports.catogorySchema = catogorySchema;
exports.Catogory = catogoryModel;
