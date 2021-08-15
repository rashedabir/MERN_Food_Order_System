const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    images: {
      type: Object,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      require: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
