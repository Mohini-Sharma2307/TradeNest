const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const { getHoldings } = require("../controllers/holdingController");


router.get("/", verifyToken, getHoldings);


module.exports = router;