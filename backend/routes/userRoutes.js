const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  getWallet,
  getProfile,
  updateProfile,
  changePassword,
} = require("../controllers/userController");

router.get("/wallet", verifyToken, getWallet);

router.get("/profile", verifyToken, getProfile);
router.put(
  "/change-password",
  verifyToken,
  changePassword
);
// Edit Profile
router.put("/profile", verifyToken, updateProfile);

module.exports = router;