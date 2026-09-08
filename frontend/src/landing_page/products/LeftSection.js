import React from "react";
import "./ProductSection.css";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="product-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Product Image */}
          <div className="col-lg-6 col-md-6">
            <div className="product-image-wrapper">
              <img
                src={imageURL}
                alt={productName}
                className="product-image"
              />
            </div>
          </div>

          {/* Product Content */}
          <div className="col-lg-6 col-md-6">
            <div className="product-content">

              <h2>{productName}</h2>

              <p>{productDesription}</p>

              <div className="product-links">

                {tryDemo && (
                  <a
                    href={tryDemo}
                    className="product-link"
                  >
                    Try Demo <span>→</span>
                  </a>
                )}

                {learnMore && (
                  <a
                    href={learnMore}
                    className="product-link"
                  >
                    Learn More <span>→</span>
                  </a>
                )}

              </div>

              {(googlePlay || appStore) && (
                <div className="store-badges">

                  {googlePlay && (
                    <a href={googlePlay}>
                      <img
                        src="https://zerodha.com/static/images/google-play-badge.svg"
                        alt="Get it on Google Play"
                      />
                    </a>
                  )}

                  {appStore && (
                    <a href={appStore}>
                      <img
                        src="https://zerodha.com/static/images/appstore-badge.svg"
                        alt="Download on Google Play"
                      />
                    </a>
                  )}

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeftSection;