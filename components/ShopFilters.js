import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
const StyledShopFilters = styled.section`
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    margin-bottom: 3rem;
  }
`;
export const Title = styled.p`
  font-size: 3rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletS}) {
    font-size: 2rem;
  }
`;

export const Header = styled.section`
  display: flex;
  place-items: center;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    margin-bottom: 2rem;
  }
`;
const FiltersContainer = styled.section`
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding: 1rem;
`;
const Filter = styled.section`
  margin-bottom: 2rem;
`;
const FilterTitle = styled.p`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d2d2d2;
`;
const Filters = styled.ul``;
const FilterOptions = styled.li`
  display: flex;
  place-items: center;
`;

export default function ShopFilters() {
  return (
    <StyledShopFilters>
      <Header>
        <Title>Product Filters</Title>
      </Header>
      <FiltersContainer>
        <Filter>
          <FilterTitle>Country</FilterTitle>
          <Filters></Filters>
        </Filter>
        <Filter>
          <FilterTitle>Grapes</FilterTitle>
          <Filters></Filters>
        </Filter>
      </FiltersContainer>
    </StyledShopFilters>
  );
}
