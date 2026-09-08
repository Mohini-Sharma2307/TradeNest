// require('dotenv').config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const analyticsRoutes = require("./routes/analyticsRoutes");
// const watchlistRoutes = require("./routes/watchlistRoutes");
// const searchRoutes = require("./routes/searchRoutes");

// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");
// const holdingRoutes = require("./routes/holdingRoutes");

// const dashboardRoutes = require("./routes/dashboardRoutes");

// const PORT = process.env.PORT || 3002;
// const url = process.env.Mongo_URL;

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/analytics", analyticsRoutes);
// app.use("/api/holding", holdingRoutes);
// app.use("/api/watchlist", watchlistRoutes);
// app.use("/api/search", searchRoutes);

// app.use("/api/dashboard", dashboardRoutes);


// // 👇 Middleware import (file ke top par)
// const verifyToken = require("./middleware/authMiddleware");

// // 👇 Protected Route
// app.get("/profile", verifyToken, (req, res) => {
//   res.json({
//     success: true,
//     message: "Welcome to Profile",
//     user: req.user,
//   });
// });


// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });



// app.listen(PORT, () => {
//     console.log("App started!");
//     mongoose.connect(url);
//     console.log("DB connected!")
// });


































require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");
const searchRoutes = require("./routes/searchRoutes");
const holdingRoutes = require("./routes/holdingRoutes");
const positionRoutes = require("./routes/positionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.Mongo_URL;

const app = express();

// ======================================
// MIDDLEWARE
// ======================================

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

// ======================================
// ROUTES
// ======================================

app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/order", orderRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use("/api/holding", holdingRoutes);

app.use("/api/position", positionRoutes);

app.use("/api/watchlist", watchlistRoutes);

app.use("/api/search", searchRoutes);

app.use("/api/dashboard", dashboardRoutes);

// ======================================
// AUTH MIDDLEWARE
// ======================================

const verifyToken = require("./middleware/authMiddleware");

// ======================================
// PROTECTED PROFILE ROUTE
// ======================================

app.get("/profile", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Profile",
    user: req.user,
  });
});

// ======================================
// OLD HOLDINGS ROUTE
// ======================================

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});

    res.json(allHoldings);
  } catch (error) {
    console.log("All Holdings Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ======================================
// OLD POSITIONS ROUTE
// ======================================

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});

    res.json(allPositions);
  } catch (error) {
    console.log("All Positions Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ======================================
// START SERVER
// ======================================

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);

  mongoose
    .connect(url)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((error) => {
      console.log("DB connection error:", error);
    });
});

