const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  getPositions,
} = require("../controllers/positionController");

// ======================================
// GET POSITIONS
// ======================================

router.get("/", verifyToken, getPositions);

module.exports = router;