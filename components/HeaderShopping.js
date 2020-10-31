import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import useCart from "../hooks/useCart";
const StyledHeaderShopping = styled.section`
  color: white;
  display: grid;
  grid-auto-flow: column;
  column-gap: 2rem;
  align-items: center;
  align-content: center;
  height: 100%;
  justify-self: end;
  p {
    font-size: 2rem;
  }
`;
export default function HeaderShopping() {
  const { value } = useCart();
  const router = useRouter();
  return (
    <StyledHeaderShopping>
      <i className="far fa-heart fa-2x"></i>
      <i
        className="fas fa-shopping-bag fa-2x"
        onClick={() => router.push("/shop/cart")}
      ></i>
      <p>{value.toFixed(2)} GBP</p>
    </StyledHeaderShopping>
  );
}
