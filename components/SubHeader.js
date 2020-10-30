import styled from "@emotion/styled";
import React from "react";
const StyledSubHeader = styled.header`
  background: white;
  color: black;
  padding: 2rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 10rem;
`;
const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-around;
  gap: 5rem;
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
