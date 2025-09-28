import React, { useState } from "react";

const Header = ({ cart, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveItem = (productId, e) => {
    e.stopPropagation();
    removeFromCart(productId);
  };

  const handleClickOutside = (e) => {
    if (
      !e.target.closest(".cart-icon") &&
      !e.target.closest(".cart-dropdown")
    ) {
      setIsCartOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <img src="/assets/Group 12.svg" alt="Logo" />
      <div className="cart-icon" onClick={handleCartClick}>
        <img src="/assets/Group 3.1.svg" alt="Cart" />
        <span className="cart-count">{totalItems}</span>
        <div className={`cart-dropdown ${isCartOpen ? "active" : ""}`}>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <button
                    className="remove-item"
                    onClick={(e) => handleRemoveItem(item.id, e)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div className="cart-total">
                <strong>
                  Total: $
                  {cart
                    .reduce(
                      (sum, item) =>
                        sum + parseFloat(item.price) * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </strong>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
