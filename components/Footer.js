import styled from "@emotion/styled";
import React from "react";
const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  p {
    font-size: 2rem;
    color: white;
    text-align: center;
  }
`;
export default function Footer() {
  return (
    <StyledFooter>
      <p>whiny barrel &copy; 2020</p>
    </StyledFooter>
  );
}
