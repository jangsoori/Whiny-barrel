import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
const StyledHero = styled.section`
  justify-self: center;
  align-self: center;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeroTextWrapper = styled.section`
  display: grid;
  gap: 3rem;
  margin-bottom: 5rem;
`;
const HeroText = styled.h2`
  font-size: 5rem;
  text-align: center;
  color: white;
  font-family: "Josefin Sans";
  font-weight: 300;
`;
const HeroBtn = styled.button`
  font-family: "Josefin Sans";

  border: none;
  background: white;
  color: black;
  border-radius: 0.5rem;
  margin: 0 auto;
  display: block;
  font-size: 2rem;
  padding: 2rem 3rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ffa;
  }
`;
export default function Hero() {
  const router = useRouter();
  return (
    <StyledHero>
      <HeroTextWrapper>
        <HeroText>Welcome to the greatest wine shop in the world!</HeroText>
        <HeroText>Take a look at our awesome stuff</HeroText>
      </HeroTextWrapper>
      <HeroBtn onClick={() => router.push("/shop")}>Browse our shop</HeroBtn>
    </StyledHero>
  );
}
