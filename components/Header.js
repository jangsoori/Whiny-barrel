import styled from "@emotion/styled";
import React, { useState } from "react";
import HeaderShopping from "./HeaderShopping";
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import SideMenu from "./SideMenu";
const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  position: relative;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 10;
  height: 6rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, max-content);
    justify-content: space-between;
  }
`;
export default function Header() {
  const [open, setOpen] = useState(false);
  const callback = (val) => {
    setOpen(val);
  };

  return (
    <StyledHeader>
      <MenuBtn setOpen={callback} open={open} />
      <Logo />
      <HeaderShopping />
      <SideMenu setOpen={callback} open={open} />
    </StyledHeader>
  );
}
