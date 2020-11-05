import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    //Make copy of array, find index of item in array. If exists, add quanity, if not, add item with quantity of 1
    const newarr = cart;
    const index = newarr.findIndex((x) => x._id === item._id);
    if (index > -1) {
      newarr[index].qty++;
      setCart([...newarr]);
    } else {
      item.qty = 1;
      setCart([...cart, item]);
    }
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((el) => el._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, actions: { addToCart, deleteFromCart, clearCart } }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
