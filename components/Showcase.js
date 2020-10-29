import styled from "@emotion/styled";
import React from "react";
import ShowcaseItem from "./ShowcaseItem";
const StyledShowcase = styled.section`
  background: white;
`;
const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export default function Showcase({ items }) {
  const renderItems = () => {
    return items.map((item) => {
      return <ShowcaseItem item={item} />;
    });
  };
  return (
    <StyledShowcase>
      <Items>{renderItems()}</Items>
    </StyledShowcase>
  );
}
