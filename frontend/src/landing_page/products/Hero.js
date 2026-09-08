import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="products-hero container border-bottom">
      <div className="text-center mt-5 p-3">

        <h1>Technology</h1>

        <h3 className="products-hero-subtitle mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="products-hero-description mt-3 mb-5">
          Check out our{" "}
          <a
            href="#investment-offerings"
            className="products-hero-link"
          >
            investment offerings{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>
        </p>

      </div>
    </section>
  );
}

export default Hero;

