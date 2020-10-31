import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

export default function useCartActions() {
  const { actions } = useContext(CartContext);
  return actions;
}
