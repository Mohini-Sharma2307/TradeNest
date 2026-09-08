
import React, { useState, useEffect, useContext, useMemo } from "react";
import GeneralContext from "./GeneralContext";
import API from "../api/api";
import { VerticalGraph } from "./VerticalGraph";
import "./Holdings.css";

const Holdings = () => {
  const generalContext = useContext(GeneralContext);

  const [allHoldings, setAllHoldings] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("DEFAULT");

  /* ===========================
     LOAD HOLDINGS
  =========================== */

  const loadHoldings = () => {
    API.get("/holding")
      .then((res) => {
        console.log("Holdings Reloaded");
        setAllHoldings(res.data.holdings || []);
      })
      .catch((err) => {
        console.log("Holdings Error:", err);
      });
  };

  useEffect(() => {
    loadHoldings();
  }, [generalContext.refreshData]);

  /* ===========================
     FILTER + SEARCH + SORT
  =========================== */

  const processedHoldings = useMemo(() => {
    let holdings = [...allHoldings];

    /* Search */

    if (search.trim() !== "") {
      holdings = holdings.filter((stock) =>
        stock.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    /* Profit / Loss Filter */

    if (filter === "PROFIT") {
      holdings = holdings.filter((stock) => {
        const pnl = stock.price * stock.qty - stock.avg * stock.qty;
        return pnl > 0;
      });
    }

    if (filter === "LOSS") {
      holdings = holdings.filter((stock) => {
        const pnl = stock.price * stock.qty - stock.avg * stock.qty;
        return pnl < 0;
      });
    }

    /* Sorting */

    if (sortBy === "PNL_HIGH") {
      holdings.sort((a, b) => {
        const pnlA = a.price * a.qty - a.avg * a.qty;
        const pnlB = b.price * b.qty - b.avg * b.qty;

        return pnlB - pnlA;
      });
    }

    if (sortBy === "PNL_LOW") {
      holdings.sort((a, b) => {
        const pnlA = a.price * a.qty - a.avg * a.qty;
        const pnlB = b.price * b.qty - b.avg * b.qty;

        return pnlA - pnlB;
      });
    }

    if (sortBy === "VALUE_HIGH") {
      holdings.sort(
        (a, b) => b.price * b.qty - a.price * a.qty,
      );
    }

    if (sortBy === "VALUE_LOW") {
      holdings.sort(
        (a, b) => a.price * a.qty - b.price * b.qty,
      );
    }

    if (sortBy === "RETURN_HIGH") {
      holdings.sort((a, b) => {
        const investmentA = a.avg * a.qty;
        const investmentB = b.avg * b.qty;

        const pnlA = a.price * a.qty - investmentA;
        const pnlB = b.price * b.qty - investmentB;

        const returnA =
          investmentA > 0 ? pnlA / investmentA : 0;

        const returnB =
          investmentB > 0 ? pnlB / investmentB : 0;

        return returnB - returnA;
      });
    }

    return holdings;
  }, [allHoldings, search, filter, sortBy]);

  /* ===========================
     PORTFOLIO CALCULATIONS
  =========================== */

  const totalInvestment = processedHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0,
  );

  const currentValue = processedHoldings.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0,
  );

  const profitLoss = currentValue - totalInvestment;

  const profitPercent =
    totalInvestment > 0
      ? ((profitLoss / totalInvestment) * 100).toFixed(2)
      : "0.00";

  /* ===========================
     GRAPH DATA
  =========================== */

  const graphData = {
    labels: processedHoldings.map((stock) => stock.name),

    datasets: [
      {
        label: "Current Price",
        data: processedHoldings.map((stock) => stock.price),
        backgroundColor: "#387ed1",
        borderRadius: 6,
      },
    ],
  };

  /* ===========================
     FORMAT PRICE
  =========================== */

  const formatPrice = (value) => {
    return Number(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="holdings-page">

      {/* ===========================
          HEADER
      =========================== */}

      <div className="holdings-header">

        <div>
          <h2>
            📊 Holdings ({processedHoldings.length})
          </h2>
        </div>

        <input
          type="text"
          className="search-holding"
          placeholder="🔍 Search Holdings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* ===========================
          FILTER + SORT
      =========================== */}

      <div className="holdings-controls">

        <div className="holding-filters">

          <button
            className={`holding-filter-btn ${
              filter === "ALL" ? "active" : ""
            }`}
            onClick={() => setFilter("ALL")}
          >
            ALL
          </button>

          <button
            className={`holding-filter-btn profit-filter ${
              filter === "PROFIT" ? "active" : ""
            }`}
            onClick={() => setFilter("PROFIT")}
          >
            PROFIT
          </button>

          <button
            className={`holding-filter-btn loss-filter ${
              filter === "LOSS" ? "active" : ""
            }`}
            onClick={() => setFilter("LOSS")}
          >
            LOSS
          </button>

        </div>

        <div className="holding-sort">

          <label>Sort By</label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="DEFAULT">Default</option>
            <option value="PNL_HIGH">P&L High → Low</option>
            <option value="PNL_LOW">P&L Low → High</option>
            <option value="VALUE_HIGH">
              Current Value High → Low
            </option>
            <option value="VALUE_LOW">
              Current Value Low → High
            </option>
            <option value="RETURN_HIGH">
              Return High → Low
            </option>
          </select>

        </div>

      </div>

      {/* ===========================
          SUMMARY CARDS
      =========================== */}

      <div className="summary-cards">

        <div className="summary-card">

          <h5>Total Investment</h5>

          <h2>
            ₹{formatPrice(totalInvestment)}
          </h2>

        </div>

        <div className="summary-card">

          <h5>Current Value</h5>

          <h2>
            ₹{formatPrice(currentValue)}
          </h2>

        </div>

        <div
          className={`summary-card ${
            profitLoss >= 0 ? "profit" : "loss"
          }`}
        >

          <h5>Profit / Loss</h5>

          <h2>
            ₹{formatPrice(profitLoss)}
          </h2>

          <small>
            {profitLoss >= 0 ? "+" : ""}
            {profitPercent}%
          </small>

        </div>

        <div className="summary-card">

          <h5>Total Holdings</h5>

          <h2>
            {processedHoldings.length}
          </h2>

        </div>

      </div>

      {/* ===========================
          HOLDINGS TABLE
      =========================== */}

      <div className="holding-table-card">

        <table>

          <thead>

            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg Cost</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&L</th>
              <th>Return</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {processedHoldings.length > 0 ? (

              processedHoldings.map((stock, index) => {

                const investment =
                  stock.avg * stock.qty;

                const currentVal =
                  stock.price * stock.qty;

                const pnl =
                  currentVal - investment;

                const returnPercent =
                  investment > 0
                    ? ((pnl / investment) * 100).toFixed(2)
                    : "0.00";

                const pnlClass =
                  pnl >= 0 ? "profit" : "loss";

                return (

                  <tr key={stock._id || index}>

                    {/* Instrument */}

                    <td>
                      <strong>
                        {stock.name}
                      </strong>
                    </td>

                    {/* Quantity */}

                    <td>
                      {stock.qty}
                    </td>

                    {/* Average Cost */}

                    <td>
                      ₹{formatPrice(stock.avg)}
                    </td>

                    {/* LTP */}

                    <td>
                      ₹{formatPrice(stock.price)}
                    </td>

                    {/* Current Value */}

                    <td>
                      ₹{formatPrice(currentVal)}
                    </td>

                    {/* P&L */}

                    <td className={pnlClass}>

                      {pnl >= 0 ? "+" : "-"}₹
                      {formatPrice(Math.abs(pnl))}

                    </td>

                    {/* Return */}

                    <td className={pnlClass}>

                      {pnl >= 0 ? "+" : ""}
                      {returnPercent}%

                    </td>

                    {/* Action */}

                    <td>

                      <button
                        className="sell"
                        onClick={() =>
                          generalContext.openSellWindow(
                            stock.name,
                          )
                        }
                      >
                        🔴 Sell
                      </button>

                    </td>

                  </tr>

                );
              })

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="empty-holdings"
                >

                  <div className="empty-holding-content">

                    <div className="empty-holding-icon">
                      📊
                    </div>

                    <h3>
                      No Holdings Found
                    </h3>

                    <p>
                      Try changing your search or filter.
                    </p>

                  </div>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* ===========================
          PORTFOLIO OVERVIEW
      =========================== */}

      <div className="graph-card">

        <h3>
          📈 Portfolio Overview
        </h3>

        <p>
          Current price of your holdings
        </p>

        <VerticalGraph data={graphData} />

      </div>

    </div>
  );
};

export default Holdings;
