import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

export default function useCartValue() {
  const [value, setValue] = React.useState(0);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    const cartValue = cart.reduce((prev, current) => prev + current.price, 0);
    setValue(cartValue);
  }, [cart]);

  return value;
}
