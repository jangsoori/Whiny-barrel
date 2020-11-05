import styled from "@emotion/styled";
import React from "react";
import ShopLayout from "../../../components/ShopLayout";
import { server } from "../../../config/index";
import ShopItemDetail from "../../../components/ShopItemDetail";
export default function item({ item }) {
  return (
    <ShopLayout>
      <ShopItemDetail item={item} />
    </ShopLayout>
  );
}

export async function getStaticPaths(ctx) {
  const res = await fetch(`${server}/api/getItems`);
  const items = await res.json();
  const paths = items.map((item) => ({
    params: { id: item._id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${server}/api/getItems`);
  const items = await res.json();
  const item = items.find((item) => {
    return item._id.toString() === params.id.toString();
  });
  console.log(item);
  return {
    props: { item: item },
  };
}
