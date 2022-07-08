import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase-utils";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("Categories");
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // setProducts
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
