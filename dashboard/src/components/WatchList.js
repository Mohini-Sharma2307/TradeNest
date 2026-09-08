import React, { useContext, useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-hot-toast";
import SearchBar from "./watchlist/SearchBar";
import SearchDropdown from "./watchlist/SearchDropdown";
import { DoughnutChart } from "./DoughnoutChart";
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import "./WatchList.css";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  const generalContext = useContext(GeneralContext);

  const [watchlist, setWatchlist] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Load Watchlist
  const loadWatchlist = async () => {
    try {
      const watchlistRes = await API.get("/watchlist");

      setWatchlist(watchlistRes.data.watchlist);

      const portfolioRes = await API.get("/dashboard/portfolio");

      setPortfolioData(portfolioRes.data.portfolio);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadWatchlist();
  }, [generalContext.refreshData]);

  // Live Search
  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await API.get(`/search?q=${search}`);

        setSearchResults(res.data.stocks);
      } catch (err) {
        console.log(err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Add Stock
  const handleAdd = async (stock) => {
    try {
      await API.post("/watchlist/add", stock);

      toast.success(`${stock.name} added to Watchlist`);

      loadWatchlist();

      setSearch("");
      setSearchResults([]);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to add stock"
      );
    }
  };

  // Filter Watchlist
  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Doughnut Chart Data
  const data = {
    labels: portfolioData.map((item) => item.name),

    datasets: [
      {
        label: "Portfolio",

        data: portfolioData.map((item) => item.value),

        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#9C27B0",
          "#F44336",
          "#00BCD4",
          "#FF9800",
        ],

        borderColor: "#fff",

        borderWidth: 2,

        hoverOffset: 15,
      },
    ],
  };

  return (
    <div className="watchlist-container">

      <SearchBar
        search={search}
        setSearch={setSearch}
        filteredCount={filteredWatchlist.length}
        totalCount={watchlist.length}
      />

      <SearchDropdown
        results={searchResults}
        handleAdd={handleAdd}
      />

      <ul className="list">

        {filteredWatchlist.map((stock, index) => (
          <WatchListItem
            key={stock._id || index}
            stock={stock}
          />
        ))}

      </ul>

      {portfolioData.length > 0 && (
        <DoughnutChart data={data} />
      )}

    </div>
  );
};


/* =========================
   WATCHLIST ITEM
========================= */

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  /*
    Decide color using percentage.

    Negative percentage = RED
    Positive percentage = GREEN
  */

  const percentageValue = parseFloat(
    String(stock.percent).replace("%", "")
  );

  const isDown = percentageValue < 0;

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >

      <div className="item">

        {/* Stock Name */}

        <p className={isDown ? "down" : "up"}>
          {stock.name}
        </p>


        <div className="itemInfo">

          {/* Percentage */}

          <span
            className={
              isDown
                ? "percent down"
                : "percent up"
            }
          >
            {stock.percent}
          </span>


          {/* Arrow */}

          {isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}


          {/* Price */}

          <span className="price">
            ₹{stock.price}
          </span>

        </div>

      </div>


      {/* Actions */}

      {showActions && (
        <WatchListActions stock={stock} />
      )}

    </li>
  );
};


/* =========================
   WATCHLIST ACTIONS
========================= */

const WatchListActions = ({ stock }) => {
  const generalContext = useContext(GeneralContext);

  // Remove Stock
  const removeStock = async () => {
    try {
      await API.delete(
        `/watchlist/remove/${stock.name}`
      );

      toast.success(
        `${stock.name} removed from Watchlist`
      );

      generalContext.refreshDashboard();

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Failed to remove stock"
      );
    }
  };

  return (
    <span className="actions">

      {/* Buy */}

      <Tooltip
        title="Buy"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="buy"
          onClick={() =>
            generalContext.openBuyWindow(
              stock.name
            )
          }
        >
          Buy
        </button>
      </Tooltip>


      {/* Sell */}

      <Tooltip
        title="Sell"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="sell"
          onClick={() =>
            generalContext.openSellWindow(
              stock.name
            )
          }
        >
          Sell
        </button>
      </Tooltip>


      {/* Analytics */}

      <Tooltip
        title="Analytics"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="action"
          onClick={() =>
            generalContext.openAnalyticsWindow(
              stock.name
            )
          }
        >
          <BarChartOutlined />
        </button>
      </Tooltip>


      {/* Remove */}

      <Tooltip
        title="Remove"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="action"
          onClick={removeStock}
        >
          <MoreHoriz />
        </button>
      </Tooltip>

    </span>
  );
};

export default WatchList;