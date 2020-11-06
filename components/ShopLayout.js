import styled from "@emotion/styled";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeaderCat from "./HeaderCat";
import SubHeader from "./SubHeader";
const StyledShopLayout = styled.section`
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  height: 100%;
`;
const Content = styled.section`
  padding: 0 2rem;
  display: grid;
  margin-bottom: 10rem;
  flex: 1;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tabletL}) {
    margin-bottom: 5rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    padding: 0.5rem;
  }
`;
export default function ShopLayout({ children }) {
  return (
    <StyledShopLayout>
      <Header />
      <HeaderCat />
      <SubHeader />
      <Content className="hi">{children}</Content>
      <Footer />
    </StyledShopLayout>
  );
}
