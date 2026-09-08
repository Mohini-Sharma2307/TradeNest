const { HoldingsModel } = require("../model/HoldingsModel");
const { WatchlistModel } = require("../model/WatchlistModel");

const getAnalytics = async (req, res) => {
  try {
    const { name } = req.params;
    const userId = req.user.id;

    const holding = await HoldingsModel.findOne({
      userId,
      name,
    });

    const watchlist = await WatchlistModel.findOne({
      userId,
      name,
    });

    if (!holding || !watchlist) {
      return res.status(404).json({
        success: false,
        message: "Stock not found",
      });
    }

    const investment = holding.qty * holding.avg;
    const currentValue = holding.qty * watchlist.price;
    const profitLoss = currentValue - investment;

    res.json({
      success: true,
      analytics: {
        name: holding.name,
        qty: holding.qty,
        avgPrice: holding.avg,
        currentPrice: watchlist.price,
        percent: watchlist.percent,
        isDown: watchlist.isDown,
        investment,
        currentValue,
        profitLoss,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getAnalytics,
};