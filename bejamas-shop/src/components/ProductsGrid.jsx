import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products, filters, addToCart }) => {
  const filterProducts = () => {
    return products.filter((product) => {
      // Category filter
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      // Price filter
      const price = parseFloat(product.price);
      let priceMatch = filters.priceRanges.length === 0;

      if (!priceMatch) {
        for (const range of filters.priceRanges) {
          if (
            (range === "under-20" && price < 20) ||
            (range === "20-100" && price >= 20 && price <= 100) ||
            (range === "100-200" && price > 100 && price <= 200) ||
            (range === "over-200" && price > 200)
          ) {
            priceMatch = true;
            break;
          }
        }
      }

      return categoryMatch && priceMatch;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="products-wrapper">
      <section className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </section>

      <div className="pagination-container">
        <nav className="pagination">
          <button>
            <img src="/assets/Vector 1.svg" alt="forward arrow" />
          </button>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <button>
            <img src="/assets/Vector 2.svg" alt="backward arrow" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProductsGrid;
