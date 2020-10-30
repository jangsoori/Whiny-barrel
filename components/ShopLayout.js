import styled from "@emotion/styled";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeaderCat from "./HeaderCat";
import SubHeader from "./SubHeader";
const StyledShopLayout = styled.section``;
const Content = styled.section`
  padding: 0 2rem;
  margin-bottom: 2rem;
`;
export default function ShopLayout({ children }) {
  return (
    <StyledShopLayout>
      <Header />
      <HeaderCat />
      <SubHeader />
      <Content>{children}</Content>
      <Footer />
    </StyledShopLayout>
  );
}
