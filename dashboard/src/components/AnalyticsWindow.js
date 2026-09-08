import React, { useEffect, useState, useContext } from "react";
import API from "../api/api";
import GeneralContext from "./GeneralContext";
import "./AnalyticsWindow.css";

const AnalyticsWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    API.get(`/analytics/${uid}`)
      .then((res) => {
        console.log(res.data);
        setAnalytics(res.data.analytics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid]);

  if (!analytics) {
    return (
      <div className="analytics-overlay">
        <div className="analytics-box">
          <div className="analytics-header">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="analytics-overlay">
      <div className="analytics-box">
        <div className="analytics-header">
          <h2>📊 {analytics.name} Analytics</h2>
        </div>

        <div className="analytics-body">
          <div className="analytics-row">
            <span>Current Price</span>
            <strong>₹{analytics.currentPrice}</strong>
          </div>

          <div className="analytics-row">
            <span>Average Price</span>
            <strong>₹{analytics.avgPrice}</strong>
          </div>

          <div className="analytics-row">
            <span>Quantity</span>
            <strong>{analytics.qty}</strong>
          </div>

          <div className="analytics-row">
            <span>Investment</span>
            <strong>₹{analytics.investment}</strong>
          </div>

          <div className="analytics-row">
            <span>Current Value</span>
            <strong>₹{analytics.currentValue}</strong>
          </div>

          <div className="analytics-row">
            <span>Profit / Loss</span>

            <strong
              className={
                analytics.profitLoss >= 0
                  ? "analytics-profit"
                  : "analytics-loss"
              }
            >
              ₹{analytics.profitLoss}
            </strong>
          </div>

          <div className="analytics-row">
            <span>Change</span>

            <strong
              className={
                analytics.isDown
                  ? "analytics-loss"
                  : "analytics-profit"
              }
            >
              {analytics.percent}
            </strong>
          </div>

          <div className="analytics-row">
            <span>Status</span>

            <strong
              className={
                analytics.isDown
                  ? "analytics-loss"
                  : "analytics-profit"
              }
            >
              {analytics.isDown ? "📉 Down" : "📈 Up"}
            </strong>
          </div>
        </div>

        <div className="analytics-footer">
          <button onClick={generalContext.closeAnalyticsWindow}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWindow;