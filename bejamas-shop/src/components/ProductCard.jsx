import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      {product.badge && <span className="badge">{product.badge}</span>}
      <img src={product.image} alt={product.title} />
      <button className="add-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <p className="category">{product.category}</p>
      <h4 className="title">{product.title}</h4>
      <p className="price">${product.price}</p>
    </div>
  );
};

export default ProductCard;
