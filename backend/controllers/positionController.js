const { HoldingsModel } = require("../model/HoldingsModel");

// ======================================
// GET USER POSITIONS
// ======================================

const getPositions = async (req, res) => {
  try {
    const positions = await HoldingsModel.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      positions,
    });

  } catch (error) {
    console.log("Get Positions Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getPositions,
};