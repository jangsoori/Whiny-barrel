import styled from "@emotion/styled";
import React from "react";
import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

const StyledShopMain = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10rem;
`;
export default function ShopMain({ categories, items }) {
  return (
    <StyledShopMain>
      <ShopFilters categories={categories} />
      <ShopItems items={items} />
    </StyledShopMain>
  );
}