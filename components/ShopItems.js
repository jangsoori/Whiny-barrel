import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Header, Title } from "./ShopFilters";
import ShopItem from "./ShopItem";
const StyledShopItems = styled.section``;
const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  /* justify-content: left; */
  justify-items: left;
  gap: 5rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    justify-items: center;
  }
`;

const Sort = styled.select`
  margin-left: 2rem;
`;

const sortOption = [
  { value: "alphabetical", displayAs: "Name: A-Z" },
  { value: "alphabeticalReverse", displayAs: "Name: Z-A" },
  { value: "priceAscending", displayAs: "Price: Low to High" },
  { value: "priceDescending", displayAs: "Price: High to Low" },
  { value: "yearAscending", displayAs: "Year: Old to New" },
  { value: "yearDescending", displayAs: "Year: New to Old" },
];
export default function ShopItems({ items }) {
  const [sortBy, setSortBy] = useState("alphabetical");

  const sortItems = () => {
    let sortedItems = [...items];
    switch (sortBy) {
      case "alphabetical":
        return sortedItems.sort((a, b) => a.name > b.name);
        break;
      case "alphabeticalReverse":
        return sortedItems.sort((a, b) => a.name < b.name);
        break;
      case "priceAscending":
        return sortedItems.sort((a, b) => a.price > b.price);
        break;

      case "priceDescending":
        return sortedItems.sort((a, b) => a.price < b.price);
        break;

      case "yearAscending":
        return sortedItems.sort((a, b) => a.year > b.year);
        break;

      case "yearDescending":
        return sortedItems.sort((a, b) => a.year < b.year);
        break;
    }
  };

  const renderItems = () =>
    sortItems().map((item) => <ShopItem key={item._id} item={item} />);

  const renderSortOptions = () => {
    return sortOption.map((option) => {
      return <option value={option.value}>{option.displayAs}</option>;
    });
  };
  return (
    <StyledShopItems>
      <Header>
        <Title>Our products</Title>
        <Sort onChange={(e) => setSortBy(e.target.value)}>
          {renderSortOptions()}
        </Sort>
      </Header>
      <Items>{renderItems()}</Items>
    </StyledShopItems>
  );
}
