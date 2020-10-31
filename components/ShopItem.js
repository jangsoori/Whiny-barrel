import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { CartContext } from "../contexts/CartContext";
import { Name, Price, Year } from "./ShowcaseItem";
const Item = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding: 3rem 0rem;
  display: grid;
  row-gap: 1rem;
  grid-template-rows: 2fr auto 0.5fr auto auto;
  text-align: center;
  font-family: "Josefin Sans";
  font-weight: 300;
  font-size: 2rem;
  width: 30rem;
  justify-items: center;
  position: relative;
  .shop-item-name {
    font-weight: 400;
    margin: 0 1rem;
  }
`;

const Actions = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 0.5rem;
`;
const ActionAddBasket = styled.p`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 1.5rem;
`;

const ActionAddFav = styled.p``;
const ActionSeeDetails = styled.p`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem 1.5rem;
`;
export default function ShopItem({ item }) {
  const { cart, setCart } = React.useContext(CartContext);
  const addToCart = () => {
    setCart([...cart, item]);
  };

  return (
    <Item>
      <Image src={`/pics/${item.picture}`} width={200} height={220} />
      <Year>{item.year}</Year>
      <Name className="shop-item-name">{item.name}</Name>
      <Price>{item.price.toFixed(2)} GBP</Price>
      <Actions>
        <ActionAddBasket onClick={() => addToCart()}>
          Add to cart
        </ActionAddBasket>
        <ActionSeeDetails>See details</ActionSeeDetails>
      </Actions>
    </Item>
  );
}
