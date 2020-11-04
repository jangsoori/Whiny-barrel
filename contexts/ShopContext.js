import { createContext } from "react";
import useShop from "../hooks/useShop";

export const ShopContext = createContext();
const ShopProvider = ({ children }) => {
  const { items, categories } = useShop();

  return (
    <ShopContext.Provider value={{ items, categories }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
