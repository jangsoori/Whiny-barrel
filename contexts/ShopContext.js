import { createContext } from "react";
import useShop from "../hooks/useShop";

export const ShopContext = createContext();
const ShopProvider = ({ children }) => {
  const { items } = useShop();

  return (
    <ShopContext.Provider
      value={{
        items,
        // filters: {
        //   countries: { type: "country", options: countries },
        //   grapes: { type: "grape", options: grapes },
        // },
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
