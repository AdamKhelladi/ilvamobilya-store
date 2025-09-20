import "./Products.css";
import categoryImg1 from "../../assets/products/products-categories-1.png";
import categoryImg2 from "../../assets/products/products-categories-2.png";
import categoryImg3 from "../../assets/products/products-categories-3.png";
import { useState } from "react";
import ProductsContent from "./ProductsContent";

// Sofas images
import image1 from "../../assets/products/SofasModels/model-1.jpg";
import image2 from "../../assets/products/SofasModels/model-2.jpg";
import image3 from "../../assets/products/SofasModels/model-3.jpg";
import image4 from "../../assets/products/SofasModels/model-4.jpg";
import image5 from "../../assets/products/SofasModels/model-5.jpg";
import image6 from "../../assets/products/SofasModels/model-6.jpg";
import image7 from "../../assets/products/SofasModels/model-7.jpg";
import image8 from "../../assets/products/SofasModels/model-8.jpg";
import image9 from "../../assets/products/SofasModels/model-9.jpg";
import image10 from "../../assets/products/SofasModels/model-10.jpg";
import image11 from "../../assets/products/SofasModels/model-11.jpg";
import image12 from "../../assets/products/SofasModels/model-12.jpg";
import image13 from "../../assets/products/SofasModels/model-13.jpg";
import image14 from "../../assets/products/SofasModels/model-14.jpg";
import image15 from "../../assets/products/SofasModels/model-15.jpg";
import image16 from "../../assets/products/SofasModels/model-16.jpg";
import image17 from "../../assets/products/SofasModels/model-17.jpg";
import image18 from "../../assets/products/SofasModels/model-18.jpg";
import image19 from "../../assets/products/SofasModels/model-19.jpg";
import image20 from "../../assets/products/SofasModels/model-20.jpg";

const productsCategoriesData = [
  {
    id: 1,
    name: "Sofas",
    img: categoryImg3,
  },
  {
    id: 2,
    name: "Coffee Tables",
    img: categoryImg2,
  },
  {
    id: 3,
    name: "Dining Tables",
    img: categoryImg1,
  },
];

const sofasContentData = [
  { id: 1, name: "L Arion", price: "70,000 DA", img: image1, rate: "4.8", category: "Sofa Furniture" },
  { id: 2, name: "L Alven", price: "100,000 DA", img: image2, rate: "4.3", category: "Sofa Furniture" },
  { id: 3, name: "L Arko", price: "60,000 DA", img: image3, rate: "4.6", category: "Sofa Furniture" },
  { id: 4, name: "Lorene", price: "120,000 DA", img: image4, rate: "4.9", category: "Sofa Furniture" },
  { id: 5, name: "L Jero", price: "110,000 DA", img: image5, rate: "4.2", category: "Sofa Furniture" },
  { id: 6, name: "L Cornel", price: "60,000 DA", img: image6, rate: "4.7", category: "Sofa Furniture" },
  { id: 7, name: "L Loriva", price: "70,000 DA", img: image7, rate: "4.4", category: "Sofa Furniture" },
  { id: 8, name: "Evada", price: "70,000 DA", img: image8, rate: "4.1", category: "Sofa Furniture" },
  { id: 9, name: "Viron", price: "70,000 DA", img: image9, rate: "4.5", category: "Sofa Furniture" },
  { id: 10, name: "Classique", price: "70,000 DA", img: image10, rate: "4.8", category: "Sofa Furniture" },
  { id: 11, name: "L Maxwel", price: "70,000 DA", img: image11, rate: "4.6", category: "Sofa Furniture" },
  { id: 12, name: "Arena", price: "70,000 DA", img: image12, rate: "4.3", category: "Sofa Furniture" },
  { id: 13, name: "L Arena", price: "70,000 DA", img: image13, rate: "4.7", category: "Sofa Furniture" },
  { id: 14, name: "Kamille", price: "70,000 DA", img: image14, rate: "4.5", category: "Sofa Furniture" },
  { id: 15, name: "Panda", price: "70,000 DA", img: image15, rate: "4.9", category: "Sofa Furniture" },
  { id: 16, name: "L Ropose", price: "70,000 DA", img: image16, rate: "4.2", category: "Sofa Furniture" },
  { id: 17, name: "L Panda", price: "70,000 DA", img: image17, rate: "4.4", category: "Sofa Furniture" },
  { id: 18, name: "Mira", price: "70,000 DA", img: image18, rate: "4.6", category: "Sofa Furniture" },
  { id: 19, name: "Bubly", price: "70,000 DA", img: image19, rate: "4.1", category: "Sofa Furniture" },
  { id: 20, name: "Fendi", price: "70,000 DA", img: image20, rate: "4.8", category: "Sofa Furniture" },
];


export default function Products() {
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
            className={item.name === categorySelected ? "category categorySelected" : "category"}
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
          <ProductsContent sofasContentData={sofasContentData} />
        ) : categorySelected === "Coffee Tables" ? (
          <div className="mini-table-content">Mini Table Content</div>
        ) : (
          <div className="dining-table-content">Dining Table Content</div>
        )}
      </div>
    </div>
  );
}
