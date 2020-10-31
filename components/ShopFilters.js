import styled from "@emotion/styled";
import React from "react";
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
const Filter = styled.section``;
const FilterTitle = styled.p`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d2d2d2;
`;
const CategoryFilters = styled.ul``;
const CategoryFilter = styled.li`
  display: flex;
  place-items: center;
`;

export default function ShopFilters({ categories }) {
  const renderCategories = () =>
    categories.map((category, i) => (
      <CategoryFilter key={i}>
        <input type="checkbox" name="" id="" />
        <p>{category}</p>
      </CategoryFilter>
    ));
  // console.log(categories);
  return (
    <StyledShopFilters>
      <Title>Product Filters</Title>
      <FiltersContainer>
        <Filter>
          <FilterTitle>Category</FilterTitle>
          <CategoryFilters>{renderCategories()}</CategoryFilters>
        </Filter>
      </FiltersContainer>
    </StyledShopFilters>
  );
}
