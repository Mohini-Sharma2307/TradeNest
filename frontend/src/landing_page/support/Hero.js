import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="support-hero">
      <div className="container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="support-header">
          <div>
            <span className="support-tag">SUPPORT CENTER</span>

            <h1>How can we help you?</h1>

            <p>
              Find answers, raise a ticket or get help with your account.
            </p>
          </div>

          <button className="track-ticket-btn">
            Track Ticket
          </button>
        </div>


        {/* =========================
            SEARCH
        ========================= */}

        <div className="support-search-section">
          <h2>Search our help center</h2>

          <p>
            Search for answers to your questions about trading, investing
            and your account.
          </p>

          <div className="support-search">
            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder="Search for a topic or question..."
            />

            <button>Search</button>
          </div>


          {/* Quick Links */}

          <div className="quick-links">
            <a href="#account">Account</a>
            <a href="#trading">Trading</a>
            <a href="#orders">Orders</a>
            <a href="#funds">Funds</a>
            <a href="#stocks">Stocks &amp; ETFs</a>
          </div>
        </div>


        {/* =========================
            FEATURED
        ========================= */}

        <div className="featured-section">

          <div className="featured-header">
            <h2>Featured help topics</h2>

            <a href="#all-topics">
              View all topics →
            </a>
          </div>


          <div className="featured-grid">

            <div className="featured-card">
              <span>ACCOUNT</span>

              <h3>Account opening &amp; KYC</h3>

              <p>
                Learn how to open your account, complete KYC and
                manage your profile.
              </p>

              <a href="#account-help">
                Learn more →
              </a>
            </div>


            <div className="featured-card">
              <span>TRADING</span>

              <h3>Orders &amp; trading</h3>

              <p>
                Get help with placing, modifying and understanding
                your stock orders.
              </p>

              <a href="#trading-help">
                Learn more →
              </a>
            </div>


            <div className="featured-card">
              <span>FUNDS</span>

              <h3>Add or withdraw funds</h3>

              <p>
                Find information about adding money and withdrawing
                funds from your trading account.
              </p>

              <a href="#fund-help">
                Learn more →
              </a>
            </div>


            <div className="featured-card">
              <span>INVESTMENTS</span>

              <h3>Stocks, ETFs &amp; mutual funds</h3>

              <p>
                Explore common questions about investments and
                managing your portfolio.
              </p>

              <a href="#investment-help">
                Learn more →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;