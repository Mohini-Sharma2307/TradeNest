import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">

        <div className="hero-content">

          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <img
            //   src="/media/image/homeHero.png"
              src="https://zerodha.com/static/images/landing.svg"
              alt="Zerodha Trading Platform"
              className="hero-image"
            />
          </div>

          {/* Hero Text */}
          <div className="hero-text">

            <h1>Invest in everything</h1>

            <p>
              Online platform to invest in stocks, derivatives,
              mutual funds, ETFs, bonds, and more.
            </p>

            <div className="hero-buttons">

              <Link to="/signup" className="hero-signup-btn">
                Sign up now
              </Link>

              <Link to="/products" className="hero-learn-btn">
                Explore products
              </Link>

            </div>

            <div className="hero-trust">
              <span>✓ Simple</span>
              <span>✓ Secure</span>
              <span>✓ Fast</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;


