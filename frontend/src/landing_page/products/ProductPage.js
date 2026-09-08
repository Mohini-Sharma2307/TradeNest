import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function Products() {
  return (
    <>
      {/* Products Hero */}
      <Hero />

      {/* Kite */}
      <LeftSection
        imageURL="https://zerodha.com/static/images/products-kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy a seamless trading experience across your devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      {/* Console */}
      <RightSection
        imageURL="https://zerodha.com/static/images/products-console.png"
        productName="Console"
        productDesription="The central dashboard for your account. Get detailed insights into your trades, investments, portfolio performance, and reports."
        learnMore="#"
      />

      {/* Coin */}
      <LeftSection
        imageURL="https://zerodha.com/static/images/products-coin.png"
        productName="Coin"
        productDesription="Explore direct mutual fund investments with a simple and convenient experience designed for long-term investors."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      {/* Kite Connect API */}
      <RightSection
        imageURL="https://zerodha.com/static/images/kite-trade/landing.svg"
        productName="Kite Connect API"
        productDesription="Build powerful trading applications with simple HTTP and JSON APIs. Create innovative investment experiences using a developer-friendly platform."
        learnMore="#"
      />

      {/* Varsity */}
      <LeftSection
        imageURL="https://zerodha.com/static/images/varsity-products.svg"
        productName="Varsity"
        productDesription="Learn about the stock market with easy-to-understand lessons, detailed explanations, and illustrations designed to help you learn at your own pace."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      {/* Technology Link */}
      <div className="products-tech-link text-center mt-5 mb-5">
        <p>
          Want to know more about our technology and products?
        </p>

        <a
          href="https://zerodha.tech/"
          target="_blank"
          rel="noreferrer"
        >
          Visit Zerodha.tech →
        </a>
      </div>

      {/* Zerodha Universe */}
      <Universe />
    </>
  );
}

export default Products;
