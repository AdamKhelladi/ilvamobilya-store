import "./Products.css";
import categoryImg1 from "../../assets/products/products-categories-1.png";
import categoryImg2 from "../../assets/products/products-categories-2.png";
import categoryImg3 from "../../assets/products/products-categories-3.png";
import { useState } from "react";
import ProductsContent from "./ProductsContent";

// Sofas images
import sofaImage1 from "../../assets/products/SofasModels/model-1.jpg";
import sofaImage2 from "../../assets/products/SofasModels/model-2.jpg";
import sofaImage3 from "../../assets/products/SofasModels/model-3.jpg";
import sofaImage4 from "../../assets/products/SofasModels/model-4.jpg";
import sofaImage5 from "../../assets/products/SofasModels/model-5.jpg";
import sofaImage6 from "../../assets/products/SofasModels/model-6.jpg";
import sofaImage7 from "../../assets/products/SofasModels/model-7.jpg";
import sofaImage8 from "../../assets/products/SofasModels/model-8.jpg";
import sofaImage9 from "../../assets/products/SofasModels/model-9.jpg";
import sofaImage10 from "../../assets/products/SofasModels/model-10.jpg";
import sofaImage11 from "../../assets/products/SofasModels/model-11.jpg";
import sofaImage12 from "../../assets/products/SofasModels/model-12.jpg";
import sofaImage13 from "../../assets/products/SofasModels/model-13.jpg";
import sofaImage14 from "../../assets/products/SofasModels/model-14.jpg";
import sofaImage15 from "../../assets/products/SofasModels/model-15.jpg";
import sofaImage16 from "../../assets/products/SofasModels/model-16.jpg";
import sofaImage17 from "../../assets/products/SofasModels/model-17.jpg";
import sofaImage18 from "../../assets/products/SofasModels/model-18.jpg";
import sofaImage19 from "../../assets/products/SofasModels/model-19.jpg";
import sofaImage20 from "../../assets/products/SofasModels/model-20.jpg";

// Coffee tables images
import coffeeTableImage1 from "../../assets/products/CoffeeTableModels/model-1.jpg";
import coffeeTableImage2 from "../../assets/products/CoffeeTableModels/model-2.jpg";
import coffeeTableImage3 from "../../assets/products/CoffeeTableModels/model-3.jpg";
import coffeeTableImage4 from "../../assets/products/CoffeeTableModels/model-4.jpg";
import coffeeTableImage5 from "../../assets/products/CoffeeTableModels/model-5.jpg";
import coffeeTableImage6 from "../../assets/products/CoffeeTableModels/model-6.jpg";
import coffeeTableImage7 from "../../assets/products/CoffeeTableModels/model-7.jpg";
import coffeeTableImage8 from "../../assets/products/CoffeeTableModels/model-8.jpg";
import coffeeTableImage9 from "../../assets/products/CoffeeTableModels/model-9.jpg";
import coffeeTableImage10 from "../../assets/products/CoffeeTableModels/model-10.jpg";
import coffeeTableImage11 from "../../assets/products/CoffeeTableModels/model-11.jpg";
import coffeeTableImage12 from "../../assets/products/CoffeeTableModels/model-12.jpg";

// Dining tables images
import diningTableImage1 from "../../assets/products/DiningTableModels/model-1.jpg";
import diningTableImage2 from "../../assets/products/DiningTableModels/model-2.jpg";
import diningTableImage3 from "../../assets/products/DiningTableModels/model-3.jpg";
import diningTableImage4 from "../../assets/products/DiningTableModels/model-4.jpg";
import diningTableImage5 from "../../assets/products/DiningTableModels/model-5.jpg";

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

const sofasData = [
  {
    id: 1,
    name: "L Arion",
    price: "70,000 DA",
    img: sofaImage1,
    rate: "4.8",
    category: "Sofa Furniture",
  },
  {
    id: 2,
    name: "L Alven",
    price: "100,000 DA",
    img: sofaImage2,
    rate: "4.3",
    category: "Sofa Furniture",
  },
  {
    id: 3,
    name: "L Arko",
    price: "60,000 DA",
    img: sofaImage3,
    rate: "4.6",
    category: "Sofa Furniture",
  },
  {
    id: 4,
    name: "Lorene",
    price: "120,000 DA",
    img: sofaImage4,
    rate: "4.9",
    category: "Sofa Furniture",
  },
  {
    id: 5,
    name: "L Jero",
    price: "110,000 DA",
    img: sofaImage5,
    rate: "4.2",
    category: "Sofa Furniture",
  },
  {
    id: 6,
    name: "L Cornel",
    price: "60,000 DA",
    img: sofaImage6,
    rate: "4.7",
    category: "Sofa Furniture",
  },
  {
    id: 7,
    name: "L Loriva",
    price: "70,000 DA",
    img: sofaImage7,
    rate: "4.4",
    category: "Sofa Furniture",
  },
  {
    id: 8,
    name: "Evada",
    price: "70,000 DA",
    img: sofaImage8,
    rate: "4.1",
    category: "Sofa Furniture",
  },
  {
    id: 9,
    name: "Viron",
    price: "70,000 DA",
    img: sofaImage9,
    rate: "4.5",
    category: "Sofa Furniture",
  },
  {
    id: 10,
    name: "Classique",
    price: "70,000 DA",
    img: sofaImage10,
    rate: "4.8",
    category: "Sofa Furniture",
  },
  {
    id: 11,
    name: "L Maxwel",
    price: "70,000 DA",
    img: sofaImage11,
    rate: "4.6",
    category: "Sofa Furniture",
  },
  {
    id: 12,
    name: "Arena",
    price: "70,000 DA",
    img: sofaImage12,
    rate: "4.3",
    category: "Sofa Furniture",
  },
  {
    id: 13,
    name: "L Arena",
    price: "70,000 DA",
    img: sofaImage13,
    rate: "4.7",
    category: "Sofa Furniture",
  },
  {
    id: 14,
    name: "Kamille",
    price: "70,000 DA",
    img: sofaImage14,
    rate: "4.5",
    category: "Sofa Furniture",
  },
  {
    id: 15,
    name: "Panda",
    price: "70,000 DA",
    img: sofaImage15,
    rate: "4.9",
    category: "Sofa Furniture",
  },
  {
    id: 16,
    name: "L Ropose",
    price: "70,000 DA",
    img: sofaImage16,
    rate: "4.2",
    category: "Sofa Furniture",
  },
  {
    id: 17,
    name: "L Panda",
    price: "70,000 DA",
    img: sofaImage17,
    rate: "4.4",
    category: "Sofa Furniture",
  },
  {
    id: 18,
    name: "Mira",
    price: "70,000 DA",
    img: sofaImage18,
    rate: "4.6",
    category: "Sofa Furniture",
  },
  {
    id: 19,
    name: "Bubly",
    price: "70,000 DA",
    img: sofaImage19,
    rate: "4.1",
    category: "Sofa Furniture",
  },
  {
    id: 20,
    name: "Fendi",
    price: "70,000 DA",
    img: sofaImage20,
    rate: "4.8",
    category: "Sofa Furniture",
  },
];

const coffeeTablesData = [
  {
    id: 1,
    name: "MDF Luxury Marble",
    price: "20,000 DA",
    img: coffeeTableImage1,
    rate: "4.8",
    category: "Coffee Table",
  },
  {
    id: 2,
    name: "Rounded wooden",
    price: "10,000 DA",
    img: coffeeTableImage2,
    rate: "4.2",
    category: "Coffee Table",
  },
  {
    id: 3,
    name: "Rounded wooden",
    price: "10,000 DA",
    img: coffeeTableImage3,
    rate: "4.6",
    category: "Coffee Table",
  },
  {
    id: 4,
    name: "Classic Oak",
    price: "12,000 DA",
    img: coffeeTableImage4,
    rate: "4.3",
    category: "Coffee Table",
  },
  {
    id: 5,
    name: "MDF Luxury Marble",
    price: "20,000 DA",
    img: coffeeTableImage5,
    rate: "4.9",
    category: "Coffee Table",
  },
  {
    id: 6,
    name: "Rounded wooden",
    price: "10,000 DA",
    img: coffeeTableImage6,
    rate: "4.1",
    category: "Coffee Table",
  },
  {
    id: 7,
    name: "Rounded wooden",
    price: "10,000 DA",
    img: coffeeTableImage7,
    rate: "4.7",
    category: "Coffee Table",
  },
  {
    id: 8,
    name: "MDF Luxury Marble",
    price: "20,000 DA",
    img: coffeeTableImage8,
    rate: "4.4",
    category: "Coffee Table",
  },
  {
    id: 9,
    name: "Luxury Marble",
    price: "120,000 DA",
    img: coffeeTableImage9,
    rate: "4.5",
    category: "Coffee Table",
  },
  {
    id: 10,
    name: "Glass Top",
    price: "22,000 DA",
    img: coffeeTableImage10,
    rate: "4.0",
    category: "Coffee Table",
  },
  {
    id: 11,
    name: "MDF Luxury Marble",
    price: "20,000 DA",
    img: coffeeTableImage11,
    rate: "4.6",
    category: "Coffee Table",
  },
  {
    id: 12,
    name: "Glass Top",
    price: "15,000 DA",
    img: coffeeTableImage12,
    rate: "4.3",
    category: "Coffee Table",
  },
];

const diningTablesData = [
  {
    id: 1,
    name: "Glass Top",
    price: "40,000 DA",
    img: diningTableImage1,
    rate: "4.7",
    category: "Dining Table",
  },
  {
    id: 2,
    name: "Glass Top",
    price: "40,000 DA",
    img: diningTableImage2,
    rate: "4.3",
    category: "Dining Table",
  },
  {
    id: 3,
    name: "MDF Luxury Marble",
    price: "48,000 DA",
    img: diningTableImage3,
    rate: "4.6",
    category: "Dining Table",
  },
  {
    id: 4,
    name: "Rounded wooden",
    price: "42,000 DA",
    img: diningTableImage4,
    rate: "4.1",
    category: "Dining Table",
  },
  {
    id: 5,
    name: "MDF Luxury Marble",
    price: "48,000 DA",
    img: diningTableImage5,
    rate: "4.8",
    category: "Dining Table",
  },
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
      <div className="product-content">
        {categorySelected === "Sofas" ? (
          <ProductsContent contentData={sofasData} />
        ) : categorySelected === "Coffee Tables" ? (
          <ProductsContent contentData={coffeeTablesData} />
        ) : (
          <ProductsContent contentData={diningTablesData} />
        )}
      </div>
    </div>
  );
}
