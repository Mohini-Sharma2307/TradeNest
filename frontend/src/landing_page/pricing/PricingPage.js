import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import "./PricingPage.css";

function PricingPage() {
  return (
    <main className="pricing-page">

      {/* =========================================
          PRICING HERO
      ========================================= */}

      <section className="pricing-hero">
        <Hero />
      </section>


      {/* =========================================
          BROKERAGE & CHARGES
      ========================================= */}

      <section className="pricing-brokerage">
        <Brokerage />
      </section>


      {/* =========================================
          OPEN ACCOUNT CTA
      ========================================= */}

      <section className="pricing-account">
        <OpenAccount />
      </section>

    </main>
  );
}

export default PricingPage;

