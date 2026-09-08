import React from "react";
import { Link } from "react-router-dom";
import "./Universe.css";

const universeProducts = [
  {
    name: "Smallcase",
    image:
      "https://zerodha.com/static/images/products/smallcase-logo.png",
    description: "Thematic investment platform",
  },
  {
    name: "Sensibull",
    image:
      "https://zerodha.com/static/images/products/sensibull-logo.svg",
    description: "Options trading platform",
  },
  {
    name: "Streak",
    image:
      "https://zerodha.com/static/images/products/streak-logo.png",
    description: "Algo trading platform",
  },
  {
    name: "Ditto",
    image:
      "https://zerodha.com/static/images/products/ditto-logo.png",
    description: "Insurance advisory platform",
  },
  {
    name: "GoldenPi",
    image:
      "https://zerodha.com/static/images/partners/tijori.svg",
    description: "Bond investment platform",
  },
  {
    name: "Coin",
    image:
      "https://zerodha.com/static/images/partners/zerodhafundhouse.png",
    description: "Direct mutual fund platform",
  },
];

function Universe() {
  return (
    <section className="universe-section">
      <div className="container">

        {/* Header */}
        <div className="universe-header">
          <span className="universe-tag">
            OUR ECOSYSTEM
          </span>

          <h2>The Zerodha Universe</h2>

          <p>
            Extend your trading and investment experience even
            further with our partner platforms.
          </p>
        </div>

        {/* Products */}
        <div className="universe-grid">

          {universeProducts.map((product) => (
            <div
              className="universe-card"
              key={product.name}
            >

              <div className="universe-logo-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="universe-logo"
                />
              </div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <a
                href="#"
                className="universe-link"
              >
                Explore →
              </a>

            </div>
          ))}

        </div>

        {/* Signup */}
        <div className="universe-action">
          <Link
            to="/signup"
            className="universe-signup"
          >
            Sign up now
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Universe;