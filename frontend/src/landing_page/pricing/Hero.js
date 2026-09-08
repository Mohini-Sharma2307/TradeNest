import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="pricing-hero-content container">

      {/* =========================
          HEADER
      ========================= */}

      <div className="pricing-header text-center">
        <h1>Pricing</h1>

        <p className="pricing-subtitle">
          Free equity investments and flat ₹20 trades and F&O trades
        </p>
      </div>


      {/* =========================
          PRICING CARDS
      ========================= */}

      <div className="pricing-cards">

        {/* =========================
            CARD 1
        ========================= */}

        <div className="pricing-card">

          <div className="pricing-card-image">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="Free equity delivery"
            />
          </div>

          <h2>Free equity delivery</h2>

          <p>
            All equity delivery investments (NSE, BSE), are absolutely
            free — ₹0 brokerage.
          </p>

        </div>


        {/* =========================
            CARD 2
        ========================= */}

        <div className="pricing-card">

          <div className="pricing-card-image">
            <img
              src="https://zerodha.com/static/images/other-trades.svg"
              alt="Intraday and F&O trades"
            />
          </div>

          <h2>Intraday and F&O trades</h2>

          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order
            on intraday trades across equity, currency, and commodity
            trades.
          </p>

        </div>


        {/* =========================
            CARD 3
        ========================= */}

        <div className="pricing-card">

          <div className="pricing-card-image">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="Free direct mutual funds"
            />
          </div>

          <h2>Free direct MF</h2>

          <p>
            All direct mutual fund investments are absolutely free —
            ₹0 commissions & DP charges.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;