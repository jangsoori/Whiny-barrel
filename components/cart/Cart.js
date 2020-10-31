import styled from "@emotion/styled";
import React from "react";
import useCart from "../../hooks/useCart";
import Item from "./Item";

const StyledCart = styled.section`
  display: grid;
  margin: 0 5rem;
`;
const Title = styled.p`
  margin: 0 auto;
  margin-bottom: 5rem;
  font-size: 3rem;
  text-transform: uppercase;
`;
const Items = styled.ul`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  row-gap: 4rem;
`;
export default function Cart() {
  const { cart } = useCart();
  React.useEffect(() => {
    console.log(cart);
  }, []);

  const renderItems = () => {
    return cart.map((item) => <Item item={item} />);
  };
  return (
    <StyledCart>
      <Title>Cart</Title>
      <Items>{renderItems()}</Items>
    </StyledCart>
  );
}
