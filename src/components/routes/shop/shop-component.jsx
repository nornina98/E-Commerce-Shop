import { useContext } from "react";
import { CategoriesContext } from "../../../contexts/categories-context";
import CategoryPreview from "../../category-preview/category-preview-component";

import "./shop-styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-cointainer">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
