import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase-utils";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /*
  useEffect(() => {
    addCollectionAndDocuments("Categories", SHOP_DATA);
  }, []);
*/

  // setProducts
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
