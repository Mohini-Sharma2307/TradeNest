import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-5 pricing-content">
            <h1>Unbeatable pricing</h1>

            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

            <a href="#pricing" className="pricing-link">
              See Pricing{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* SPACING */}
          <div className="col-lg-1"></div>

          {/* RIGHT PRICING CARDS */}
          <div className="col-lg-6 pricing-cards-wrapper">
            <div className="pricing-cards">
              <div className="pricing-card">
               
                <img
                  src="https://zerodha.com/static/images/pricing-eq.svg"
                  alt="Free equity delivery"
                />

                <p>
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>

              <div className="pricing-card">
                <img
                  src="https://zerodha.com/static/images/other-trades.svg"
                  alt="Intraday and F&O trades"
                />

                <p>Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
