import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview-component";
import Category from "../category/category-component";
import { getCategoriesAndDocuments } from "../../../utils/firebase-utils";
import { setCategoriesMap } from "../../../store/categories/category-action";

import "./shop-styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("Categories");
      // getData from firebase collection as Categories product --> refer files utils as helper within method.
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
