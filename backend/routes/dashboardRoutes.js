const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  getDashboard,
  getPortfolio,
} = require("../controllers/dashboardController");

router.get("/", verifyToken, getDashboard);

router.get("/portfolio", verifyToken, getPortfolio);

module.exports = router;