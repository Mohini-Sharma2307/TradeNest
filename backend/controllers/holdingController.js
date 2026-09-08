const { HoldingsModel } = require("../model/HoldingsModel");

const getHoldings = async (req, res) => {
  try {

    const holdings = await HoldingsModel.find({
      userId: req.user.id
    });

    res.status(200).json({
      success: true,
      holdings
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


module.exports = {
  getHoldings
};