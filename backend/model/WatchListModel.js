const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    percent: {
      type: String,
      required: true,
    },

    isDown: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const WatchListModel = mongoose.model("watchlist", WatchlistSchema);
module.exports = { WatchListModel };