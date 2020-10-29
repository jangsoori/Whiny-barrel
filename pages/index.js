import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import { server } from "../config/index.js";
const StyledHome = styled.section`
  height: 100%;
  width: 100%;
`;
const Background = styled.section`
  height: 100%;
  width: 100%;
  z-index: -1;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.67) 100%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("/homebg.jpg") center center / cover;

  position: fixed;
  top: 0;
  left: 0;
`;
export default function Home({ items }) {
  return (
    <StyledHome>
      <Layout>
        <Background />
        <Hero />
        <Showcase items={items} />
      </Layout>
    </StyledHome>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/items.json`);
  const data = await res.json();
  const showcaseItems = [];

  //Get random 4 wines
  (() => {
    const numbers = [];
    for (let i = 0; numbers.length < 4; i++) {
      const random = Math.floor(Math.random() * data.length);
      if (!numbers.includes(random)) {
        numbers.push(random);
        showcaseItems.push(data[random]);
      } else {
        continue;
      }
    }
  })();
  return {
    props: { items: showcaseItems },
  };
}
