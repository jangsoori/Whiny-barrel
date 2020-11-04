import React, { useEffect, useState } from "react";

export default function useShop() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(`/api/getItems`);
      const data = await res.json();
      setItems(data.items);
    };
    getItems();
  }, []);
  useEffect(() => {
    const categories = [];
    //get categories
    items.forEach((item) => {
      categories.push(item.country);
    });
    setCategories([...new Set(categories)]);
  }, [items]);

  return { items, categories };
}
