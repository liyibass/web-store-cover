const mongoose = require("mongoose");

const navigationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  catogories: {
    type: Array,
    required: true,
  },
});

const NavigationModel = mongoose.model("Navigation", navigationSchema);

// module.exports = navigation;
exports.navigationSchema = navigationSchema;
exports.Navigation = NavigationModel;
