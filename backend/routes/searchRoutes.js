const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const { searchStocks } = require("../controllers/searchController");

router.get("/", verifyToken, searchStocks);

module.exports = router;