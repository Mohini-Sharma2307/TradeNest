import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <section className="awards-section">
      <div className="container">
        <div className="row align-items-center">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="col-lg-6">
            <div className="awards-content">

              <span className="section-tag">
                WHY CHOOSE US
              </span>

              <h2>
                Everything you need to invest with confidence
              </h2>

              <p className="awards-description">
                A simple and powerful platform designed to make
                investing easier, faster and more accessible.
              </p>

              <div className="investment-grid">

                <div className="investment-item">
                  <span className="investment-icon">📈</span>

                  <div>
                    <h4>Stocks & IPOs</h4>
                    <p>
                      Invest in companies and upcoming IPOs.
                    </p>
                  </div>
                </div>

                <div className="investment-item">
                  <span className="investment-icon">📊</span>

                  <div>
                    <h4>Mutual Funds</h4>
                    <p>
                      Explore direct mutual fund investments.
                    </p>
                  </div>
                </div>

                <div className="investment-item">
                  <span className="investment-icon">💹</span>

                  <div>
                    <h4>Futures & Options</h4>
                    <p>
                      Access derivatives through one platform.
                    </p>
                  </div>
                </div>

                <div className="investment-item">
                  <span className="investment-icon">🏦</span>

                  <div>
                    <h4>Bonds & Securities</h4>
                    <p>
                      Explore bonds and government securities.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* =========================
              RIGHT STATS
          ========================= */}

          <div className="col-lg-6">
            <div className="awards-stats">

              <div className="stat-card">
                <span className="stat-icon">👥</span>

                <h3>Millions</h3>

                <p>
                  Investors and traders
                </p>
              </div>

              <div className="stat-card">
                <span className="stat-icon">📈</span>

                <h3>Multiple</h3>

                <p>
                  Investment products
                </p>
              </div>

              <div className="stat-card">
                <span className="stat-icon">🔒</span>

                <h3>Secure</h3>

                <p>
                  Protected trading experience
                </p>
              </div>

              <div className="stat-card">
                <span className="stat-icon">⚡</span>

                <h3>Fast</h3>

                <p>
                  Simple and responsive platform
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Awards;