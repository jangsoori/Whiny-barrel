import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
const StyledHeaderCat = styled.nav`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.primary};
`;
const Categories = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, max-content);

  justify-content: center;
  justify-items: center;
  column-gap: 5rem;
  row-gap: 1rem;
`;
const Category = styled.li`
  font-size: 2rem;
  color: white;
`;
const CategoryLink = styled(Link)``;
export default function HeaderCat() {
  return (
    <StyledHeaderCat>
      <Categories>
        <Category>
          <CategoryLink href="/">
            <a>All wines</a>
          </CategoryLink>
        </Category>
        <Category>
          <CategoryLink href="/">
            <a>American</a>
          </CategoryLink>
        </Category>
        <Category>
          <CategoryLink href="/">
            <a>French</a>
          </CategoryLink>
        </Category>
        <Category>
          <CategoryLink href="/">
            <a>Spanish</a>
          </CategoryLink>
        </Category>
        <Category>
          <CategoryLink href="/">
            <a>Under 100 GBP</a>
          </CategoryLink>
        </Category>
        <Category>
          <CategoryLink href="/">
            <a>Other</a>
          </CategoryLink>
        </Category>
      </Categories>
    </StyledHeaderCat>
  );
}
