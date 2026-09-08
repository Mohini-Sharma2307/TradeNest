import React from "react";
import "./Team.css";

function Team() {
  return (
    <section className="team-section">
      <div className="container">

        <div className="team-heading">
          <h2>People</h2>
          <p>
            Meet the people behind our mission to make investing
            simpler and more accessible.
          </p>
        </div>

        <div className="team-card">

          <div className="team-profile">
            <img
              src="https://zerodha.com/static/images/nithin-kamath.jpg"
              alt="Founder"
              className="team-image"
            />

            <h3>Nithin Kamath</h3>

            <p className="team-role">
              Founder, CEO
            </p>
          </div>

          <div className="team-bio">

            <p>
              Nithin bootstrapped and founded Zerodha in 2010
              to overcome the hurdles he faced during his
              decade-long stint as a trader.
            </p>

            <p>
              Today, Zerodha has played an important role in
              changing the landscape of the Indian broking
              industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market
              Advisory Committee (SMAC) and the Market Data
              Advisory Committee (MDAC).
            </p>

            <p>
              Playing basketball is his zen.
            </p>

            <div className="team-links">
              <span>Connect on</span>

              <a href="#homepage">
                Homepage
              </a>

              <a href="#tradingqna">
                TradingQnA
              </a>

              <a href="#twitter">
                Twitter
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Team;

