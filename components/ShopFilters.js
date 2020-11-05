import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
const StyledShopFilters = styled.section``;
export const Title = styled.p`
  font-size: 3rem;
  margin-bottom: 1rem;
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
      <Title>Product Filters</Title>
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
