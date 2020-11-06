import styled from "@emotion/styled";
import React, { useContext } from "react";
import ShopLayout from "../../components/ShopLayout";
import ShopMain from "../../components/ShopMain";
import { server } from "../../config/index";
import ShopProvider, { ShopContext } from "../../contexts/ShopContext";

export default function ShopIndexPage() {
  const { items } = useContext(ShopContext);

  return (
    <ShopLayout>
      <ShopMain items={items} />
    </ShopLayout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${server}/items.json`);
//   const data = await res.json();
//   const categories = [];
//   //get categories
//   data.forEach((item) => {
//     categories.push(item.country);
//   });

//   return {
//     props: {
//       items: data,
//       //remove duplicates with Set
//       categories: [...new Set(categories)],
//     },
//   };
// }
