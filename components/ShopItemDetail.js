import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import useCartActions from "../hooks/useCartActions";

const Item = styled.div`
  display: flex;
  justify-content: center;
  width: 60rem;
  margin: 0 auto;
`;
const ImageWrapper = styled.section``;
const Main = styled.section`
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 2rem;
`;
const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  place-items: center;
  column-gap: 1rem; ;
`;
const Name = styled.h2`
  font-size: 2rem;
`;
const HeaderMeta = styled.p`
  font-size: 2rem;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
`;

const Desc = styled.p`
  font-size: 1.6rem;
`;
const Price = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;
const Actions = styled.section``;
const Action = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid black;
  padding: 1rem 1.5rem;
  color: white;
  cursor: pointer;
`;
export default function ShopItemDetail({ item }) {
  const { name, price, description, stock, year, country } = item;
  const { addToCart } = useCartActions();
  return (
    <Item>
      <ImageWrapper>
        <Image unsized src={`/pics/${item.picture}`} />
      </ImageWrapper>
      <Main>
        <Header>
          <Name>{name}</Name>
          <HeaderMeta>{country}</HeaderMeta>
          <HeaderMeta>{year}</HeaderMeta>
        </Header>
        <Desc>{description}</Desc>
        <Price>{price.toFixed(2)} GBP</Price>
        <Actions>
          <Action onClick={() => addToCart(item)}>Add to cart</Action>
        </Actions>
      </Main>
    </Item>
  );
}
