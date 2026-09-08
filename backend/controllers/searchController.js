const stocks = require("../data/stocks");

const searchStocks = async (req, res) => {
  try {
    const query = req.query.q?.toLowerCase() || "";

    const result = stocks.filter((stock) =>
      stock.name.toLowerCase().includes(query)
    );

    res.json({
      success: true,
      stocks: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  searchStocks,
};