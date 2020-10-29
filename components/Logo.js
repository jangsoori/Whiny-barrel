import styled from "@emotion/styled";
import React from "react";

const StyledLogo = styled.h1`
  font-size: 4.4rem;
  color: white;
  /* font-family: "Montserrat", sans-serif; */
  font-weight: 300;
`;
export default function Logo() {
  return <StyledLogo>Whiny Barrel</StyledLogo>;
}
