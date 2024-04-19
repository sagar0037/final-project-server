// models/order.js
const mongoose = require("mongoose");

// creating the data schema for the orders
const orderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// exporting the order model
module.exports = mongoose.model("Order", orderSchema);
