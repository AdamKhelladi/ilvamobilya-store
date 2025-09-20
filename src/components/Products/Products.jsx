import "./Products.css";
import categoryImg1 from "../../assets/products/products-categories-1.png";
import categoryImg2 from "../../assets/products/products-categories-2.png";
import categoryImg3 from "../../assets/products/products-categories-3.png";
import { useState } from "react";
import SofasContent from "./SofasContent";

const productsCategoriesData = [
  {
    id: 1,
    name: "Sofas",
    img: categoryImg3,
  },
  {
    id: 2,
    name: "Mini Tables",
    img: categoryImg2,
  },
  {
    id: 3,
    name: "Dining Tables",
    img: categoryImg1,
  },
];

export default function Products() {
  const [categorySelected, setCategorySelected] = useState("Sofas");

  function handleClickCategory(item) {
    setCategorySelected(item);
  }

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-categories">
        {productsCategoriesData.map((item) => (
          <div
            key={item.id}
            className={`category category-${item.id}`}
            onClick={() => {
              handleClickCategory(item.name);
            }}
          >
            <img src={item.img} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <div className="product-content">
        {categorySelected === "Sofas" ? (
          <SofasContent />
        ) : categorySelected === "Mini Tables" ? (
          <div className="mini-table-content">Mini Table Content</div>
        ) : (
          <div className="dining-table-content">Dining Table Content</div>
        )}
      </div>
    </div>
  );
}
