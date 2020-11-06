import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
const StyledHeaderCat = styled.nav`
  background: ${({ theme }) => theme.colors.primary};
`;
const Categories = styled.ul`
  padding: 2rem;

  display: grid;
  grid-auto-flow: column;

  justify-content: center;
  justify-items: center;
  column-gap: 5rem;
  row-gap: 1rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletM}) {
    gap: 2rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletS}) {
    grid-auto-flow: row;
    row-gap: 1rem;
    transition: all 0.5s;
    padding: 0;
    align-items: center;
    ${({ active }) =>
      !active &&
      css`
        height: 0;
        visibility: hidden;
        opacity: 0;
      `};
    ${({ active }) =>
      active &&
      css`
        height: 20rem;
        padding-bottom: 1rem;
      `};
  }
`;
const Category = styled.li`
  font-size: 2rem;
  color: white;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletM}) {
    font-size: 1.4rem;
  }
`;
const CategoryLink = styled(Link)``;
const MobileShow = styled.div`
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    margin-right: 1rem;
  }
`;
export default function HeaderCat() {
  //Mobile state, if active roll it out, if hidden, do not display
  const [active, setActive] = useState(false);
  return (
    <>
      <StyledHeaderCat>
        <MobileShow onClick={() => setActive(!active)}>
          <p>Categories </p>
          <i class="fas fa-arrow-circle-down"></i>
        </MobileShow>
        <Categories active={active}>
          <Category>
            <CategoryLink href="/shop/categories/all">
              <a>All wines</a>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink href="/shop/categories/american">
              <a>American</a>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink href="/shop/categories/french">
              <a>French</a>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink href="/shop/categories/spanish">
              <a>Spanish</a>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink href="/shop/categories/under100">
              <a>Under 100 GBP</a>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink href="/shop/categories/other">
              <a>Other</a>
            </CategoryLink>
          </Category>
        </Categories>
      </StyledHeaderCat>
    </>
  );
}
