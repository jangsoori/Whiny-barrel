import React from "react";
import Basket from "../../../components/cart/Cart";
import ShopLayout from "../../../components/ShopLayout";

export default function index() {
  return (
    <ShopLayout>
      <Basket />
    </ShopLayout>
  );
}
