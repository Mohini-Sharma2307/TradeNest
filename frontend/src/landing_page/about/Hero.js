import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="about-hero">
      <div className="container">

        <div className="about-hero-heading">
          <h1>
            We pioneered the discount broking model in India
          </h1>

          <p>
            Now, we are breaking ground with our technology.
          </p>
        </div>

        <div className="about-content">

          <div className="about-column">

            <p>
              We kick-started operations in 2010 with the goal
              of breaking the barriers that traders and investors
              face in India in terms of cost, support, and technology.
            </p>

            <p>
              We named the company Zerodha, a combination of
              "Zero" and "Rodha", the Sanskrit word for barrier.
            </p>

            <p>
              Today, our pricing models and technology have helped
              us build a powerful ecosystem for investors and traders.
            </p>

          </div>

          <div className="about-column">

            <p>
              We also run online educational and community
              initiatives designed to help retail traders and
              investors understand the financial markets.
            </p>

            <p>
              <a
                href="#rainmatter"
                className="about-link"
              >
                Rainmatter
              </a>{" "}
              is our fintech fund and incubator that supports
              innovative startups working to improve India's
              financial ecosystem.
            </p>

            <p>
              We continue to build new products and experiences
              that make investing simpler, faster, and more
              accessible.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;