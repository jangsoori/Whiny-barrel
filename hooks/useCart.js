import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

export default function useCart() {
  const [value, setValue] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    const cartValue = cart.reduce(
      (prev, current) => prev + current.price * current.qty,
      0
    );
    const cartCount = cart.reduce((prev, current) => prev + current.qty, 0);
    setValue(cartValue);
    setCount(cartCount);
  }, [cart]);

  return { value, count, cart };
}
