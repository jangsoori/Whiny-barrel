import React, { useEffect, useState } from "react";

export default function useShop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(`/api/getItems`);
      const data = await res.json();
      console.log(data);
      setItems(data);
    };
    getItems();
  }, []);

  console.log(items);
  return { items };
}
