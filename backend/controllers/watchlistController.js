const { WatchlistModel } = require("../model/WatchlistModel");

// Get Watchlist
const getWatchlist = async (req, res) => {
  try {
    const watchlist = await WatchlistModel.find({
      userId: req.user.id,
    });

    res.status(200).json({
      success: true,
      watchlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Stock to Watchlist
const addWatchlist = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const { name, price, percent, isDown } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Name and Price are required",
      });
    }

    const alreadyExists = await WatchlistModel.findOne({
      userId: req.user.id,
      name,
    });

    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: "Stock already exists in Watchlist",
      });
    }

    const stock = await WatchlistModel.create({
      userId: req.user.id,
      name,
      price,
      percent: percent || "0%",
      isDown: isDown || false,
    });

    res.status(201).json({
      success: true,
      message: "Stock Added Successfully",
      stock,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Stock from Watchlist
const removeWatchlist = async (req, res) => {
  try {
    const { name } = req.params;

    const deleted = await WatchlistModel.findOneAndDelete({
      userId: req.user.id,
      name,
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Stock not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Stock Removed Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getWatchlist,
  addWatchlist,
  removeWatchlist,
};