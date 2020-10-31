import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };
  return (
    <CartContext.Provider
      value={{ cart, actions: { addToCart, deleteFromCart } }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
