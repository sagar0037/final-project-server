// api.js
const express = require("express");
const router = express.Router();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
