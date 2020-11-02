import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import useCartActions from "../../hooks/useCartActions";
const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  column-gap: 4rem;
  align-items: center;
`;
const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const Action = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
`;

export default function Item({ item }) {
  const { deleteFromCart } = useCartActions();
  return (
    <StyledItem>
      <Image src={`/pics/${item.picture}`} width={50} height={70} />
      <Info>
        <Name>{item.name}</Name>
        <Price>{item.price.toFixed(2)} GBP</Price>
      </Info>
      <Qty>Qty: {item.qty}</Qty>
      <Actions>
        <Action onClick={() => deleteFromCart(item._id)}>Remove</Action>
      </Actions>
    </StyledItem>
  );
}
