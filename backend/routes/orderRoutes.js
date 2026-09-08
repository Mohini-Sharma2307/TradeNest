const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  buyStock,
  sellStock,
  getOrders,
  getRecentOrders,
} = require("../controllers/orderController");

router.post("/buy", verifyToken, buyStock);

router.post("/sell", verifyToken, sellStock);

router.get("/orders", verifyToken, getOrders);

// Recent Orders
router.get("/recent", verifyToken, getRecentOrders);

module.exports = router;