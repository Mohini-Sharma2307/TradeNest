import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 education-image-wrapper">
            <img
              src="https://zerodha.com/static/images/index-education.svg"
              alt="Market Education"
              className="education-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 education-content">

            <h2>
              Free and open market education
            </h2>

            <p>
              Varsity, the largest online stock market education
              book in the world covering everything from the
              basics to advanced trading.
            </p>

            <a
              href="#varsity"
              className="education-link"
            >
              Varsity
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

            <p className="education-second-text">
              TradingQ&A, the most active trading and investment
              community in India for all your market related
              queries.
            </p>

            <a
              href="#tradingqa"
              className="education-link"
            >
              TradingQ&A
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;