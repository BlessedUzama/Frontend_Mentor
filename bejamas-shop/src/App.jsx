import React, { useState } from "react";
import Header from "./components/Header";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductInfoSession from "./components/ProductInfoSession";
import FilterSortBar from "./components/FilterSortBar";
import ShopLayout from "./components/ShopLayout";

function App() {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    priceRanges: [],
  });

  const featuredProduct = {
    id: "samurai",
    title: "Samurai King Resting",
    price: "200",
    image: "/assets/pexels-evgeny-tchebotarev-2187304 (1) 1.png",
    category: "Pets",
    description: `So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. So how did the classical Latin become so incoherent? According to McClintock.`,
  };

  const products = [
    {
      id: "1",
      title: "Red Bench",
      price: "3.89",
      category: "People",
      image: "/assets/Rectangle 2.png",
      badge: "Best Seller",
    },
    {
      id: "2",
      title: "Egg Balloon",
      price: "93.89",
      category: "Food",
      image: "/assets/Rectangle 2.1.png",
    },
    {
      id: "3",
      title: "Egg Balloon",
      price: "93.89",
      category: "Food",
      image: "/assets/Rectangle 2.1.png",
    },
    {
      id: "4",
      title: "Man",
      price: "100.00",
      category: "People",
      image: "/assets/Rectangle 2.4.png",
    },
    {
      id: "5",
      title: "Architecture",
      price: "101.00",
      category: "Landmark",
      image: "/assets/Rectangle 2.5.png",
    },
    {
      id: "6",
      title: "Architecture",
      price: "101.00",
      category: "Landmark",
      image: "/assets/Rectangle 2.5.png",
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Header cart={cart} removeFromCart={removeFromCart} />
      <main>
        <FeaturedProduct product={featuredProduct} addToCart={addToCart} />
        <ProductInfoSession product={featuredProduct} />
        <FilterSortBar onFilterToggle={() => setIsSidebarOpen(true)} />
        <ShopLayout
          products={products}
          filters={filters}
          isSidebarOpen={isSidebarOpen}
          onCloseSidebar={() => setIsSidebarOpen(false)}
          onUpdateFilters={updateFilters}
          addToCart={addToCart}
        />
      </main>
    </div>
  );
}

export default App;
