const { OrdersModel } = require("../model/OrdersModel");
const { UserModel } = require("../model/UserModel");
const { HoldingsModel } = require("../model/HoldingsModel");


const buyStock = async (req, res) => {
  console.log("Buy API Hit");
  console.log(req.body);
  try {
    const { name, qty, price } = req.body;

    // Validation
    if (!name || !qty || !price) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await UserModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const totalAmount = qty * price;

    // Wallet Balance Check
    if (user.balance < totalAmount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient Wallet Balance",
      });
    }

    // Deduct Balance
    user.balance -= totalAmount;
    await user.save();

    // Update Holdings

const existingHolding = await HoldingsModel.findOne({
  userId: user._id,
  name: name,
});

if (existingHolding) {

  const totalQty = existingHolding.qty + qty;

  const newAvg =
    ((existingHolding.avg * existingHolding.qty) + (price * qty)) /
    totalQty;

  existingHolding.qty = totalQty;
  existingHolding.avg = newAvg;
  existingHolding.price = price;

  await existingHolding.save();

} else {

  await HoldingsModel.create({
    userId: user._id,
    name,
    qty,
    avg: price,
    price,
    net: "0%",
    day: "0%",
  });

}


    // Save Order
    const order = await OrdersModel.create({
      userId: user._id,
      name,
      qty,
      price,
      mode: "BUY",
      totalAmount,
    });

    res.status(201).json({
      success: true,
      message: "Stock Purchased Successfully",
      order,
      walletBalance: user.balance,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Sell Stock Controller
const sellStock = async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    if (!name || !qty || !price) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await UserModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }


    // Find Holding
    const holding = await HoldingsModel.findOne({
      userId: user._id,
      name: name,
    });


    if (!holding) {
      return res.status(400).json({
        success: false,
        message: "You don't own this stock",
      });
    }


    // Quantity Check
    if (holding.qty < qty) {
      return res.status(400).json({
        success: false,
        message: "Not enough quantity",
      });
    }


    const totalAmount = qty * price;


    // Add money to wallet
    user.balance += totalAmount;
    await user.save();


    // Update Holdings
    holding.qty -= qty;


    if (holding.qty === 0) {
      await HoldingsModel.findByIdAndDelete(holding._id);
    } else {
      await holding.save();
    }


    // Save Sell Order
    const order = await OrdersModel.create({
      userId: user._id,
      name,
      qty,
      price,
      mode: "SELL",
      totalAmount,
    });


    res.status(201).json({
      success: true,
      message: "Stock Sold Successfully",
      order,
      walletBalance: user.balance,
    });


  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get Orders Controller
const getOrders = async (req, res) => {
  try {

    const orders = await OrdersModel.find({
      userId: req.user.id
    }).sort({
      createdAt: -1
    });


    res.status(200).json({
      success: true,
      orders
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Get Recent Orders
const getRecentOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find({
      userId: req.user.id,
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  buyStock,
  sellStock,
  getOrders,
  getRecentOrders,
};