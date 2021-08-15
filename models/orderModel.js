const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    cart: {
      type: Array,
      default: [],
    },
    phone: {
      type: String,
      require: true,
      trim: true,
    },
    address: {
      type: String,
      require: true,
      trim: true,
    },
    quantity: {
      type: String,
      require: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    price: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
