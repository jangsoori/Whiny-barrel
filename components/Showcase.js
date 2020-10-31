import styled from "@emotion/styled";
import React from "react";
import ShopItem from "./ShopItem";
const StyledShowcase = styled.section`
  background: white;
`;
const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  padding: 4rem 0;
  justify-content: center;
  justify-items: center;
`;
export default function Showcase({ items }) {
  const renderItems = () => {
    return items.map((item) => {
      return <ShopItem item={item} />;
    });
  };
  return (
    <StyledShowcase>
      <Items>{renderItems()}</Items>
    </StyledShowcase>
  );
}
