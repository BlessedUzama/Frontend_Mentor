import React from "react";

const ProductInfoSession = ({ product }) => {
  return (
    <div className="product-info-session">
      <div className="product-description">
        <h3>About the {product.title}</h3>
        <h3 className="category">{product.category}</h3>
        <div className="description">
          <p>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book. So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder
          </p>
          <p>
            text to mockup various fonts for a type specimen book. So how did
            the classical Latin become so incoherent? According to McClintock.
          </p>
        </div>
      </div>

      <div className="product-extras">
        <div className="related-products">
          <h3>People also buy</h3>
          <div className="images">
            <img src="/assets/Rectangle 10.png" alt="painting" />
            <img src="/assets/Rectangle 10.1.png" alt="painting" />
            <img src="/assets/Rectangle 10.2.png" alt="egg balloon" />
          </div>
        </div>
        <div className="product-details">
          <p className="details">Details</p>
          <p>Size: 1020 x 1020 pixel</p>
          <p>Size: 15 mb</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSession;
