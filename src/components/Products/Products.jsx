import "./Products.css";

import { useState } from "react";
import ProductsContent from "./ProductsContent";

import {
  productsCategoriesData,
  sofasData,
  coffeeTablesData,
  diningTablesData,
} from "./productsData";

export default function Products({ addToCart }) {
  const [categorySelected, setCategorySelected] = useState("Sofas");

  function handleClickCategory(item) {
    setCategorySelected(item);
  }

  return (
    <div className="products-container" id="products">
      <h1>Our Products</h1>
      <div className="products-categories">
        {productsCategoriesData.map((item) => (
          <div
            key={item.id}
            className={
              item.name === categorySelected
                ? "category categorySelected"
                : "category"
            }
            onClick={() => {
              handleClickCategory(item.name);
            }}
          >
            <img src={item.img} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <div className="products-content">
        {categorySelected === "Sofas" ? (
          <ProductsContent contentData={sofasData} addToCart={addToCart} />
        ) : categorySelected === "Coffee Tables" ? (
          <ProductsContent
            contentData={coffeeTablesData}
            addToCart={addToCart}
          />
        ) : (
          <ProductsContent
            contentData={diningTablesData}
            addToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
}
