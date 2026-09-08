const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  getWatchlist,
  addWatchlist,
  removeWatchlist,
} = require("../controllers/watchlistController");

// Get Watchlist
router.get("/", verifyToken, getWatchlist);

// Add Stock
router.post("/add", verifyToken, addWatchlist);

// Remove Stock
router.delete("/remove/:name", verifyToken, removeWatchlist);

module.exports = router;