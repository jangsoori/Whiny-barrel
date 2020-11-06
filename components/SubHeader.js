import styled from "@emotion/styled";
import React from "react";
const StyledSubHeader = styled.header`
  background: white;
  color: black;
  padding: 2rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 10rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    margin-bottom: 3rem;
  }
`;
const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  justify-content: center;
  gap: 2rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    gap: 1rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletM}) {
    grid-template-columns: 1fr;
  }
`;
const Feature = styled.li`
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: center;
  place-items: center;
  column-gap: 1rem;
  font-family: "Josefin Sans";
  i {
    font-size: 4rem;
  }
  span {
    font-size: 1.8rem;
    text-align: center;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    i {
      font-size: 2rem;
    }
    span {
      font-size: 1.4rem;
    }
  }
`;
export default function SubHeader() {
  return (
    <StyledSubHeader>
      <FeatureList>
        <Feature>
          <i className="fas fa-wine-bottle"></i>
          <span>High quality grapes</span>
        </Feature>
        <Feature>
          <i className="fas fa-truck"></i>
          <span>Free UK wide delivery</span>
        </Feature>
        <Feature>
          <i className="fas fa-undo"></i>
          <span>Generous return policy</span>
        </Feature>
        <Feature>
          <i className="fas fa-money-bill-wave"></i>
          <span>Secure payment process</span>
        </Feature>
      </FeatureList>
    </StyledSubHeader>
  );
}
