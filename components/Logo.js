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
      theme.breakpoints.mobile}) {
    text-align: left;
    font-size: 1.6rem;
  }
`;
export default function Logo() {
  return <StyledLogo>Whiny Barrel</StyledLogo>;
}
