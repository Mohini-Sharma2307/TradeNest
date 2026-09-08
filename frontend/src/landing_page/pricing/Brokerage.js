import React from "react";
import "./Brokerage.css";

function Brokerage() {
  const charges = [
    "Call & Trade and RMS auto-squareoff: additional charges of ₹50 + GST per order.",
    "Digital contract notes are sent directly via email.",
    "Physical contract notes, if required, are charged at ₹20 per contract note plus applicable courier charges.",
    "For NRI non-PIS accounts, equity charges are 0.5% or ₹100 per executed order, whichever is lower.",
    "For NRI PIS accounts, equity charges are 0.5% or ₹200 per executed order, whichever is lower.",
    "Orders placed when the account has a debit balance may attract additional charges.",
  ];

  return (
    <section className="brokerage-section">
      <div className="container">

        <div className="brokerage-header">
          <span className="brokerage-tag">PRICING & CHARGES</span>

          <h2>Transparent pricing</h2>

          <p>
            Simple and transparent charges with no hidden surprises.
          </p>
        </div>

        <div className="brokerage-grid">

          {/* Brokerage Calculator */}
          <div className="brokerage-card calculator-card">

            <div className="brokerage-icon">
              📊
            </div>

            <h3>Brokerage calculator</h3>

            <p>
              Calculate brokerage, taxes and other applicable charges
              before placing your order.
            </p>

            <a href="#" className="brokerage-link">
              Calculate charges →
            </a>

          </div>

          {/* List of Charges */}
          <div className="brokerage-card">

            <div className="brokerage-icon">
              📋
            </div>

            <h3>List of charges</h3>

            <p>
              Get a detailed overview of applicable account and
              transaction-related charges.
            </p>

            <a href="#" className="brokerage-link">
              View all charges →
            </a>

          </div>

        </div>

        {/* Additional Information */}

        <div className="additional-charges">

          <h3>Additional charges</h3>

          <ul>
            {charges.map((charge, index) => (
              <li key={index}>
                {charge}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Brokerage;

