import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase-utils";

// setup for initial state of categories product
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// create provider from parent to childer pass as prop
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("Categories");
      // getData from firebase collection as Categories product --> refer files utils as helper within method.
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // setProducts
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
