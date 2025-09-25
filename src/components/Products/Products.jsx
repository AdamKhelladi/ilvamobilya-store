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

      <div class="fb-post">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid03589hH6sLBcgGGeerMXSTEYwU81RhwADBRKFXvXChB8oq11hKevX3ZFhqkCRyucDgl%26id%3D61572166948470&show_text=true&width=500"
          width="500"
          height="659"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="yes"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
