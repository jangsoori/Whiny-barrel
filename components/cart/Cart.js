import styled from "@emotion/styled";
import React from "react";
import useCart from "../../hooks/useCart";
import Item from "./Item";
import Summary from "./Summary";

const StyledCart = styled.section`
  display: grid;
  margin: 0 5rem;
  place-items: center;
`;
const Title = styled.p`
  margin: 0 auto;
  margin-bottom: 5rem;
  font-size: 3rem;
  text-transform: uppercase;
`;
const CartMain = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  place-items: center;
  column-gap: 4rem;
  margin: 0 auto;
  position: relative;
`;
const Items = styled.ul`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  row-gap: 4rem;
  justify-self: end;
`;
export default function Cart() {
  const { cart } = useCart();
  React.useEffect(() => {
    console.log(cart);
  }, []);

  const renderItems = () => {
    return cart.map((item) => <Item item={item} />);
  };
  if (cart.length === 0) {
    return (
      <StyledCart>
        <Title>Your cart is empty!</Title>
      </StyledCart>
    );
  }
  return (
    <StyledCart>
      <Title>Cart</Title>
      <CartMain>
        <Items>{renderItems()}</Items>
        <Summary />
      </CartMain>
    </StyledCart>
  );
}
