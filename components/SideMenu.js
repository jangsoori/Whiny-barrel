import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/core";
const StyledSideMenu = styled.nav`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateX(-100%) translateY(50%);
  background: white;
  width: 20rem;
  height: 30rem;
  z-index: 1;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  transition: transform 0.2s linear;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0) translateY(50%);
    `};
`;
const NavList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  position: relative;
  width: max-content;

  &::after {
    transition: width 0.2s;
    width: 0%;
    position: absolute;
    content: "";
    bottom: -5px;
    left: 0;
    background-color: black;
    height: 1px;
  }
  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;
const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;
export default function SideMenu({ open, setOpen }) {
  const router = useRouter();
  return (
    <StyledSideMenu open={open}>
      <NavList>
        <NavItem
          onClick={() => setOpen(!open)}
          className={router.pathname == "/" ? "active" : ""}
        >
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
        </NavItem>
        <NavItem
          onClick={() => setOpen(!open)}
          className={router.pathname == "/a" ? "active" : ""}
        >
          <NavLink href="/">
            <a>Shop</a>
          </NavLink>
        </NavItem>
        <NavItem
          onClick={() => setOpen(!open)}
          className={router.pathname == "/b" ? "active" : ""}
        >
          <NavLink href="/">
            <a>About</a>
          </NavLink>
        </NavItem>
        <NavItem
          onClick={() => setOpen(!open)}
          className={router.pathname == "/c" ? "active" : ""}
        >
          <NavLink href="/">
            <a>Contact</a>
          </NavLink>
        </NavItem>
      </NavList>
    </StyledSideMenu>
  );
}
