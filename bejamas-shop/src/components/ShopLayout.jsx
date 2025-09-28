import React from "react";
import Sidebar from "./Sidebar";
import ProductsGrid from "./ProductsGrid";

const ShopLayout = ({
  products,
  filters,
  isSidebarOpen,
  onCloseSidebar,
  onUpdateFilters,
  addToCart,
}) => {
  return (
    <div className="shop-layout">
      {/* Mobile Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={onCloseSidebar}
      >
        <div
          className={`sidebar ${isSidebarOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-filter" onClick={onCloseSidebar}>
            ✕
          </button>
          <Sidebar filters={filters} onUpdateFilters={onUpdateFilters} />
        </div>
      </div>

      {/* Desktop Sidebar - Always visible */}
      <div className="sidebar">
        <Sidebar filters={filters} onUpdateFilters={onUpdateFilters} />
      </div>

      <ProductsGrid
        products={products}
        filters={filters}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ShopLayout;
