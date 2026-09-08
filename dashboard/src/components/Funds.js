import React, { useState } from "react";
import "./Funds.css";

const Funds = () => {

  const [wallet] = useState(100000);

  const [availableCash] = useState(92450);

  const [usedMargin] = useState(7550);

  const [openingBalance] = useState(100000);

  const [payIn] = useState(5000);

  const [collateral] = useState(0);

  return (

    <div className="funds-page">

      <div className="funds-header">

        <h2>💰 Funds</h2>

        <div className="fund-actions">

          <button className="add-fund-btn">
            + Add Funds
          </button>

          <button className="withdraw-btn">
            Withdraw
          </button>

        </div>

      </div>

      <div className="fund-summary">

        <div className="fund-card">

          <h5>Wallet Balance</h5>

          <h2>
            ₹
            {wallet.toLocaleString("en-IN")}
          </h2>

        </div>

        <div className="fund-card">

          <h5>Available Cash</h5>

          <h2>
            ₹
            {availableCash.toLocaleString("en-IN")}
          </h2>

        </div>

        <div className="fund-card">

          <h5>Used Margin</h5>

          <h2>
            ₹
            {usedMargin.toLocaleString("en-IN")}
          </h2>

        </div>

        <div className="fund-card">

          <h5>Total Equity</h5>

          <h2>
            ₹
            {wallet.toLocaleString("en-IN")}
          </h2>

        </div>

      </div>

      <div className="fund-details">

        <div className="details-card">

          <h3>Account Summary</h3>
                    <div className="detail-row">
            <span>Opening Balance</span>
            <strong>₹{openingBalance.toLocaleString("en-IN")}</strong>
          </div>

          <div className="detail-row">
            <span>Pay In</span>
            <strong>₹{payIn.toLocaleString("en-IN")}</strong>
          </div>

          <div className="detail-row">
            <span>Collateral</span>
            <strong>₹{collateral.toLocaleString("en-IN")}</strong>
          </div>

          <div className="detail-row">
            <span>Exposure</span>
            <strong>₹0</strong>
          </div>

          <div className="detail-row">
            <span>Options Premium</span>
            <strong>₹0</strong>
          </div>

          <div className="detail-row">
            <span>Delivery Margin</span>
            <strong>₹0</strong>
          </div>

        </div>

        <div className="commodity-card">

          <h3>📦 Commodity Account</h3>

          <p>
            You don't have a commodity account yet.
          </p>

          <button className="open-account-btn">
            Open Account
          </button>

        </div>

      </div>

      <div className="transactions-card">

        <h3>Recent Transactions</h3>

        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>06 Aug 2026</td>
              <td>Add Funds</td>
              <td className="profit">+₹5,000</td>
              <td>
                <span className="status success">
                  Success
                </span>
              </td>
            </tr>

            <tr>
              <td>03 Aug 2026</td>
              <td>Withdraw</td>
              <td className="loss">-₹2,000</td>
              <td>
                <span className="status success">
                  Success
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Funds;