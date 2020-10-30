import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
const Item = styled.li`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 10fr;
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 10rem;
  text-align: center;
  font-family: "Josefin Sans";
  font-weight: 300;
  font-size: 2rem;
  place-items: center;
  cursor: pointer;

  position: relative;
  &:hover .shop-icons {
    display: flex;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Year = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;
export const Name = styled.p`
  align-self: start;
`;
export const Price = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const ShopIcons = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  height: 5rem;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;

  align-items: center;
  gap: 2rem;
  visibility: hidden;
  opacity: 0;
  transform: translateY(100%);
  display: none;
  transition: all 0.5s;
`;
const Img = styled(Image)`
  display: flex;
  justify-content: center;
`;
export default function ShowcaseItem({ item }) {
  return (
    <Item>
      <Year>{item.year}</Year>
      <Name>{item.name}</Name>
      <Price>{item.price.toFixed(2)} GBP</Price>
      <Img height={300} width={250} src={`/pics/${item.picture}`}></Img>
      <ShopIcons className="shop-icons">
        <i className="far fa-heart"></i>
        <i className="fas fa-cart-plus"></i>
      </ShopIcons>
    </Item>
  );
}
