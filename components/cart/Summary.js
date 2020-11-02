import styled from "@emotion/styled";
import React from "react";
import useCart from "../../hooks/useCart";
const StyledSummary = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  /* height: 100%; */
  align-self: start;
  border: 1px solid #d3d3d3;
  padding: 2rem;
  border-radius: 0.5rem;
  position: sticky;
  top: 30%;
  left: 0;
`;

const Total = styled.section``;
const Title = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;
const Content = styled.p`
  font-size: 2rem;
`;
const BreakLine = styled.span`
  width: 100%;
  height: 1px;
`;
const Actions = styled.section``;
const Action = styled.button``;
export default function Summary() {
  const { count, value } = useCart();
  return (
    <StyledSummary>
      <Total>
        <Title>Total items</Title>
        <Content>{count}</Content>
      </Total>
      <Total>
        <Title>Total payment</Title>
        <Content>{value.toFixed(2)} GBP</Content>
      </Total>
      <BreakLine />
    </StyledSummary>
  );
}
