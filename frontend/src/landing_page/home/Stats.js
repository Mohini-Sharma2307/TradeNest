import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row align-items-center stats-row">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="col-lg-6 stats-content">

            <h1 className="stats-title">
              Trust with confidence
            </h1>

            <h2>
              Customer-first always
            </h2>

            <p>
              That's why 1.3 crore customers trust Zerodha with
              ₹3.5+ lakh crores of equity investments.
            </p>

            <h2>
              No spam or gimmicks
            </h2>

            <p>
              No gimmicks, spam, "gamification", or annoying push
              notifications. High quality apps that you use at your
              pace, the way you like.
            </p>

            <h2>
              The Zerodha universe
            </h2>

            <p>
              Not just an app, but a whole ecosystem. Our investments
              in 30+ fintech startups offer you tailored services
              specific to your needs.
            </p>

            <h2>
              Do better with money
            </h2>

            <p>
              With initiatives like Nudge and Kill Switch, we don't
              just facilitate transactions, but actively help you do
              better with your money.
            </p>

          </div>

          {/* =========================
              RIGHT CONTENT
          ========================= */}

          <div className="col-lg-6 stats-image-content">

            <img
              src="https://zerodha.com/static/images/ecosystem.png"
              alt="Zerodha ecosystem"
              className="stats-image"
            />

            <div className="stats-links">

              <a
                href="#products"
                className="stats-link"
              >
                Explore our products
                <i
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </a>

              <a
                href="#kite-demo"
                className="stats-link"
              >
                Try Kite demo
                <i
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;