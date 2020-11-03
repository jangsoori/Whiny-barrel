import React from "react";
import ShopLayout from "../../../components/ShopLayout";
import ShopMain from "../../../components/ShopMain";
import { server } from "../../../config/index";

export default function id({ items }) {
  console.log(items);
  return (
    <ShopLayout>
      <ShopMain items={items} categories={[]} />
    </ShopLayout>
  );
}

export async function getStaticPaths(ctx) {
  const paths = [
    { params: { id: "all" } },
    { params: { id: "american" } },
    { params: { id: "french" } },
    { params: { id: "spanish" } },
    { params: { id: "under100" } },
    { params: { id: "other" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${server}/items.json`);
  const data = await res.json();
  const itemsFromCat = () => {
    switch (params.id) {
      case "french":
        return data.filter((item) => item.country === "France");
      case "american":
        return data.filter((item) => item.country === "USA");
      case "spanish":
        return data.filter((item) => item.country === "Spain");
      case "under100":
        return data.filter((item) => item.price <= 100);
      case "other":
        return data.filter((item) => {
          return (
            item.country !== "France" &&
            item.country !== "USA" &&
            item.country !== "Spain"
          );
        });
      case "all":
        return data;
      default:
        return null;
    }
  };
  return { props: { items: itemsFromCat() } };
}
