import styled from "@emotion/styled";
import React from "react";

const StyledLogo = styled.h1`
  font-size: 4.4rem;
  color: white;
  /* font-family: "Montserrat", sans-serif; */
  font-weight: 300;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    font-size: 2rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletS}) {
    font-size: 2.5rem;
    grid-row: 1/2;
    grid-column: 1/-1;
    text-align: center;
    justify-self: center;
  }
`;
export default function Logo() {
  return <StyledLogo>Whiny Barrel</StyledLogo>;
}
