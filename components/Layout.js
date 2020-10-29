import styled from "@emotion/styled";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;
const Content = styled.section`
  display: grid;
  flex: 1;
`;
export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
  );
}
