import React from "react";

const FeaturedProduct = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="featured-product">
      <div className="headtext">
        <h1>{product.title}</h1>
        <button className="add-cart" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>

      <div className="image-container">
        <img src={product.image} alt={product.title} />
        <p className="photo-label">Photo of the day</p>
      </div>
      <button
        className="add-cart"
        id="mobile-add-to-cart"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default FeaturedProduct;
