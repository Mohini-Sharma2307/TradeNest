const { UserModel } = require("../model/UserModel");
const { HoldingsModel } = require("../model/HoldingsModel");

const getDashboard = async (req, res) => {
  try {

    const user = await UserModel.findById(req.user.id);

    const holdings = await HoldingsModel.find({
      userId: req.user.id,
    });

    let totalInvestment = 0;
    let currentValue = 0;

    holdings.forEach((item) => {
      totalInvestment += item.avg * item.qty;
      currentValue += item.price * item.qty;
    });

    res.status(200).json({
      success: true,
      walletBalance: user.balance,
      totalHoldings: holdings.length,
      totalInvestment,
      currentValue,
      profitLoss: currentValue - totalInvestment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getPortfolio = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req.user.id,
    });

    const portfolio = holdings.map((item) => ({
      name: item.name,
      value: item.qty * item.price,
    }));

    res.status(200).json({
      success: true,
      portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
  getPortfolio,
};