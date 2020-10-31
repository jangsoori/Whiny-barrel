import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  column-gap: 4rem;
  align-items: center;
`;
const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const Name = styled.p`
  font-size: 1.6rem;
  /* margin-bottom: 0.75rem; */
`;
const Price = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
const Qty = styled.p``;
const Actions = styled.section``;
export default function Item({ item }) {
  return (
    <StyledItem>
      <Image src={`/pics/${item.picture}`} width={50} height={70} />
      <Info>
        <Name>{item.name}</Name>
        <Price>
          <span>Price: </span> {item.price.toFixed(2)} GBP
        </Price>
      </Info>
      <Qty>Qty: X</Qty>
      <Actions>
        <p>add</p>
        <p>remove</p>
      </Actions>
    </StyledItem>
  );
}
