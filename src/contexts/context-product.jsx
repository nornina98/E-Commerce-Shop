import { createContext, useState } from "react";

import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products] = useState([]);
  // setProducts
  const value = { products };
  console.log(value);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
