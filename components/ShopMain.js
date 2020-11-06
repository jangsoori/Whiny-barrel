import styled from "@emotion/styled";
import React from "react";
import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

const StyledShopMain = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    row-gap: 2rem;
  }
`;
export default function ShopMain({ items }) {
  return (
    <StyledShopMain>
      <ShopFilters />
      <ShopItems items={items} />
    </StyledShopMain>
  );
}
