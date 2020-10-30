import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { Name, Price, Year } from "./ShowcaseItem";
const Item = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding: 3rem 1rem;
  display: grid;
  row-gap: 1rem;
  grid-template-rows: 2fr auto 0.5fr auto auto;
  text-align: center;
  font-family: "Josefin Sans";
  font-weight: 300;
  font-size: 2rem;
  width: 24rem;
  justify-items: center;
`;

export default function ShopItem({ item }) {
  return (
    <Item>
      <Image src={`/pics/${item.picture}`} width={200} height={220} />
      <Year>{item.year}</Year>
      <Name>{item.name}</Name>
      <Price>{item.price.toFixed(2)} GBP</Price>
    </Item>
  );
}
