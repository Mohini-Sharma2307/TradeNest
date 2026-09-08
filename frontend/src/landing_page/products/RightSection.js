import React from "react";
import "./ProductSection.css";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <section className="product-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Product Content */}
          <div className="col-lg-6 col-md-6 order-2 order-md-1">
            <div className="product-content">

              <h2>{productName}</h2>

              <p>{productDesription}</p>

              {learnMore && (
                <div className="product-links">
                  <a
                    href={learnMore}
                    className="product-link"
                  >
                    Learn More <span>→</span>
                  </a>
                </div>
              )}

            </div>
          </div>

          {/* Product Image */}
          <div className="col-lg-6 col-md-6 order-1 order-md-2">
            <div className="product-image-wrapper">
              <img
                src={imageURL}
                alt={productName}
                className="product-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RightSection;