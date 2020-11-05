import React, { useEffect, useState } from "react";

export default function useShop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(`/api/getItems`);
      const data = await res.json();
      setItems(data.items);
    };
    getItems();
  }, []);

  return { items };
}
