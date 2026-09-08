import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";

import API from "../api/api";
import GeneralContext from "./GeneralContext";

import "./Positions.css";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [search, setSearch] = useState("");

  // ======================================
  // FILTER & SORT
  // ======================================

  const [filter, setFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("DEFAULT");

  // ======================================
  // EXIT CONFIRMATION
  // ======================================

  const [exitStock, setExitStock] = useState(null);

  const {
    refreshPositionsData,
    openSellWindow,
  } = useContext(GeneralContext);

  // ======================================
  // LOAD POSITIONS
  // ======================================

  const loadPositions = async () => {
    try {
      const res = await API.get("/position");

      console.log(
        "Positions API Response:",
        res.data
      );

      if (res.data.success) {
        setAllPositions(
          res.data.positions || []
        );
      } else {
        setAllPositions([]);
      }
    } catch (error) {
      console.log(
        "Positions Error:",
        error
      );

      setAllPositions([]);
    }
  };

  // ======================================
  // INITIAL LOAD + REFRESH
  // ======================================

  useEffect(() => {
    loadPositions();
  }, [refreshPositionsData]);

  // ======================================
  // SEARCH + FILTER + SORT
  // ======================================

  const filteredPositions = useMemo(() => {
    let positions = [...allPositions];

    // ------------------------------
    // SEARCH
    // ------------------------------

    if (search.trim()) {
      positions = positions.filter(
        (stock) =>
          stock.name
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }

    // ------------------------------
    // PROFIT / LOSS FILTER
    // ------------------------------

    if (filter === "PROFIT") {
      positions = positions.filter(
        (stock) => {
          const avg = Number(
            stock.avg || 0
          );

          const price = Number(
            stock.price || 0
          );

          return price >= avg;
        }
      );
    }

    if (filter === "LOSS") {
      positions = positions.filter(
        (stock) => {
          const avg = Number(
            stock.avg || 0
          );

          const price = Number(
            stock.price || 0
          );

          return price < avg;
        }
      );
    }

    // ------------------------------
    // SORT
    // ------------------------------

    if (sortBy === "PNL_HIGH") {
      positions.sort((a, b) => {
        const pnlA =
          (Number(a.price || 0) -
            Number(a.avg || 0)) *
          Number(a.qty || 0);

        const pnlB =
          (Number(b.price || 0) -
            Number(b.avg || 0)) *
          Number(b.qty || 0);

        return pnlB - pnlA;
      });
    }

    if (sortBy === "PNL_LOW") {
      positions.sort((a, b) => {
        const pnlA =
          (Number(a.price || 0) -
            Number(a.avg || 0)) *
          Number(a.qty || 0);

        const pnlB =
          (Number(b.price || 0) -
            Number(b.avg || 0)) *
          Number(b.qty || 0);

        return pnlA - pnlB;
      });
    }

    if (sortBy === "VALUE_HIGH") {
      positions.sort((a, b) => {
        const valueA =
          Number(a.price || 0) *
          Number(a.qty || 0);

        const valueB =
          Number(b.price || 0) *
          Number(b.qty || 0);

        return valueB - valueA;
      });
    }

    if (sortBy === "VALUE_LOW") {
      positions.sort((a, b) => {
        const valueA =
          Number(a.price || 0) *
          Number(a.qty || 0);

        const valueB =
          Number(b.price || 0) *
          Number(b.qty || 0);

        return valueA - valueB;
      });
    }

    if (sortBy === "CHANGE_HIGH") {
      positions.sort((a, b) => {
        const changeA =
          Number(a.avg || 0) > 0
            ? ((Number(a.price || 0) -
                Number(a.avg || 0)) /
                Number(a.avg || 0)) *
              100
            : 0;

        const changeB =
          Number(b.avg || 0) > 0
            ? ((Number(b.price || 0) -
                Number(b.avg || 0)) /
                Number(b.avg || 0)) *
              100
            : 0;

        return changeB - changeA;
      });
    }

    return positions;
  }, [
    allPositions,
    search,
    filter,
    sortBy,
  ]);

  // ======================================
  // TOTAL INVESTMENT
  // ======================================

  const totalInvestment =
    filteredPositions.reduce(
      (total, stock) =>
        total +
        Number(stock.avg || 0) *
          Number(stock.qty || 0),
      0
    );

  // ======================================
  // CURRENT VALUE
  // ======================================

  const currentValue =
    filteredPositions.reduce(
      (total, stock) =>
        total +
        Number(stock.price || 0) *
          Number(stock.qty || 0),
      0
    );

  // ======================================
  // TOTAL P&L
  // ======================================

  const totalPnL =
    currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0
      ? (
          (totalPnL /
            totalInvestment) *
          100
        ).toFixed(2)
      : "0.00";

  // ======================================
  // EXIT CLICK
  // ======================================

  const handleExitClick = (stock) => {
    setExitStock(stock);
  };

  // ======================================
  // CONFIRM EXIT
  // ======================================

  const confirmExit = () => {
    if (!exitStock) return;

    console.log(
      "EXIT CONFIRMED:",
      exitStock.name
    );

    if (
      typeof openSellWindow ===
      "function"
    ) {
      openSellWindow(exitStock.name);
    }

    setExitStock(null);
  };

  // ======================================
  // CANCEL EXIT
  // ======================================

  const cancelExit = () => {
    setExitStock(null);
  };

  return (
    <div className="positions-page">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="positions-header">

        <div>
          <h2>
            📍 Positions (
            {filteredPositions.length}
            )
          </h2>

          <p className="positions-subtitle">
            Manage your open trading positions
          </p>
        </div>

        <input
          type="text"
          placeholder="🔍 Search stock..."
          className="search-position"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* ======================================
          FILTER & SORT BAR
      ====================================== */}

      <div className="positions-controls">

        <div className="position-filters">

          <button
            type="button"
            className={
              filter === "ALL"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() =>
              setFilter("ALL")
            }
          >
            All
          </button>

          <button
            type="button"
            className={
              filter === "PROFIT"
                ? "filter-btn active profit-filter"
                : "filter-btn"
            }
            onClick={() =>
              setFilter("PROFIT")
            }
          >
            Profit
          </button>

          <button
            type="button"
            className={
              filter === "LOSS"
                ? "filter-btn active loss-filter"
                : "filter-btn"
            }
            onClick={() =>
              setFilter("LOSS")
            }
          >
            Loss
          </button>

        </div>

        <div className="position-sort">

          <label htmlFor="position-sort">
            Sort:
          </label>

          <select
            id="position-sort"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >
            <option value="DEFAULT">
              Default
            </option>

            <option value="PNL_HIGH">
              P&L: High to Low
            </option>

            <option value="PNL_LOW">
              P&L: Low to High
            </option>

            <option value="CHANGE_HIGH">
              Return: High to Low
            </option>

            <option value="VALUE_HIGH">
              Value: High to Low
            </option>

            <option value="VALUE_LOW">
              Value: Low to High
            </option>
          </select>

        </div>

      </div>

      {/* ======================================
          SUMMARY CARDS
      ====================================== */}

      <div className="summary-cards">

        <div className="summary-card">

          <h5>Total Investment</h5>

          <h2>
            ₹
            {totalInvestment.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2,
              }
            )}
          </h2>

          <small>
            Amount invested
          </small>

        </div>

        <div className="summary-card">

          <h5>Current Value</h5>

          <h2>
            ₹
            {currentValue.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2,
              }
            )}
          </h2>

          <small>
            Current market value
          </small>

        </div>

        <div
          className={`summary-card ${
            totalPnL >= 0
              ? "profit"
              : "loss"
          }`}
        >

          <h5>Total P&L</h5>

          <h2>
            {totalPnL >= 0
              ? "+"
              : "-"}
            ₹
            {Math.abs(
              totalPnL
            ).toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2,
              }
            )}
          </h2>

          <small>
            {totalPnL >= 0
              ? "+"
              : ""}
            {pnlPercent}% overall
          </small>

        </div>

        <div className="summary-card">

          <h5>Open Positions</h5>

          <h2>
            {filteredPositions.length}
          </h2>

          <small>
            Active positions
          </small>

        </div>

      </div>

      {/* ======================================
          POSITION TABLE
      ====================================== */}

      <div className="position-table-card">

        <div className="position-table-header">

          <div>

            <h3>
              Open Positions
            </h3>

            <span>
              {filteredPositions.length} active
              position
              {filteredPositions.length !== 1
                ? "s"
                : ""}
            </span>

          </div>

        </div>

        <div className="position-table-wrapper">

          <table>

            <thead>

              <tr>

                <th>Product</th>

                <th>Instrument</th>

                <th>Qty</th>

                <th>Avg</th>

                <th>LTP</th>

                <th>Current Value</th>

                <th>P&L</th>

                <th>Return</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredPositions.length > 0 ? (

                filteredPositions.map(
                  (stock, index) => {

                    const qty =
                      Number(
                        stock.qty || 0
                      );

                    const avg =
                      Number(
                        stock.avg || 0
                      );

                    const price =
                      Number(
                        stock.price || 0
                      );

                    const currentVal =
                      price * qty;

                    const investment =
                      avg * qty;

                    const pnl =
                      currentVal -
                      investment;

                    // ==========================
                    // OVERALL RETURN %
                    // ==========================

                    const changePercent =
                      avg > 0
                        ? ((price - avg) /
                            avg) *
                          100
                        : 0;

                    const formattedReturn =
                      `${
                        changePercent >= 0
                          ? "+"
                          : ""
                      }${changePercent.toFixed(
                        2
                      )}%`;

                    const pnlClass =
                      pnl >= 0
                        ? "profit"
                        : "loss";

                    const returnClass =
                      changePercent >= 0
                        ? "profit"
                        : "loss";

                    return (
                      <tr
                        key={
                          stock._id ||
                          index
                        }
                      >

                        {/* PRODUCT */}

                        <td>
                          <span className="product-badge">
                            {stock.product ||
                              "CNC"}
                          </span>
                        </td>

                        {/* INSTRUMENT */}

                        <td>
                          <strong className="instrument-name">
                            {stock.name}
                          </strong>
                        </td>

                        {/* QUANTITY */}

                        <td>
                          {qty}
                        </td>

                        {/* AVERAGE */}

                        <td>
                          ₹
                          {avg.toFixed(
                            2
                          )}
                        </td>

                        {/* LTP */}

                        <td>
                          <strong>
                            ₹
                            {price.toFixed(
                              2
                            )}
                          </strong>
                        </td>

                        {/* CURRENT VALUE */}

                        <td>
                          ₹
                          {currentVal.toFixed(
                            2
                          )}
                        </td>

                        {/* P&L */}

                        <td
                          className={`pnl-cell ${pnlClass}`}
                        >

                          <strong>
                            {pnl >= 0
                              ? "+"
                              : "-"}
                            ₹
                            {Math.abs(
                              pnl
                            ).toFixed(
                              2
                            )}
                          </strong>

                        </td>

                        {/* RETURN */}

                        <td
                          className={`return-cell ${returnClass}`}
                        >

                          <strong>
                            {formattedReturn}
                          </strong>

                        </td>

                        {/* EXIT */}

                        <td>

                          <button
                            className="exit-btn"
                            type="button"
                            onClick={() =>
                              handleExitClick(
                                stock
                              )
                            }
                          >
                            EXIT
                          </button>

                        </td>

                      </tr>
                    );
                  }
                )

              ) : (

                <tr>

                  <td
                    colSpan="9"
                    className="empty-positions"
                  >

                    <div className="empty-position-content">

                      <div className="empty-position-icon">
                        📊
                      </div>

                      <h3>
                        No positions found
                      </h3>

                      <p>
                        {search
                          ? "Try searching for another stock."
                          : filter === "PROFIT"
                          ? "You don't have any profitable positions."
                          : filter === "LOSS"
                          ? "You don't have any loss-making positions."
                          : "You don't have any open positions yet."}
                      </p>

                    </div>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* ======================================
          EXIT CONFIRMATION MODAL
      ====================================== */}

      {exitStock && (

        <div
          className="exit-modal-overlay"
          onClick={cancelExit}
        >

          <div
            className="exit-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="exit-modal-icon">
              ⚠️
            </div>

            <h3>
              Exit Position?
            </h3>

            <p className="exit-modal-message">
              Are you sure you want to exit
              this position?
            </p>

            <div className="exit-stock-info">

              <div>
                <span>
                  Instrument
                </span>

                <strong>
                  {exitStock.name}
                </strong>
              </div>

              <div>
                <span>
                  Quantity
                </span>

                <strong>
                  {exitStock.qty}
                </strong>
              </div>

              <div>
                <span>
                  Current Price
                </span>

                <strong>
                  ₹
                  {Number(
                    exitStock.price || 0
                  ).toFixed(2)}
                </strong>
              </div>

              <div>
                <span>
                  Current Value
                </span>

                <strong>
                  ₹
                  {(
                    Number(
                      exitStock.price || 0
                    ) *
                    Number(
                      exitStock.qty || 0
                    )
                  ).toFixed(2)}
                </strong>
              </div>

            </div>

            <p className="exit-modal-note">
              Continuing will open the sell
              window for this position.
            </p>

            <div className="exit-modal-actions">

              <button
                type="button"
                className="cancel-exit-btn"
                onClick={cancelExit}
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirm-exit-btn"
                onClick={confirmExit}
              >
                Confirm Exit
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Positions;

