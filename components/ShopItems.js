import styled from "@emotion/styled";
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Title } from "./ShopFilters";
import ShopItem from "./ShopItem";
const StyledShopItems = styled.section``;
const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  /* justify-content: left; */
  justify-items: left;
  gap: 5rem;
`;

export default function ShopItems({ items }) {
  const renderItems = () =>
    items.map((item) => <ShopItem key={item._id} item={item} />);

  return (
    <StyledShopItems>
      <Title>Our products</Title>
      <Items>{renderItems()}</Items>
    </StyledShopItems>
  );
}
