import "./Categories.css";
import Image1 from "../../assets/category/category-img-4.png";
import Image2 from "../../assets/category/category-img-2.png";
import Image3 from "../../assets/category/category-img-3.png";

export default function Categories() {
  const categoryData = [
    {
      id: 1,
      title: "Dining Table Chair",
      type: "+5 MODELS",
      description: "Available in several models.",
      img: Image1,
    },
    {
      id: 2,
      title: "Sofas",
      type: "+20 MODELS",
      description: "Available in several models.",
      img: Image2,
    },
    {
      id: 3,
      title: "Tables",
      type: "+10 MODELS",
      description:
        "Available in different shapes and finishes to suit your style.",
      img: Image3,
    },
  ];

  return (
    <div className="categories-container" id="categories">
      <div className="items">
        {categoryData.map((item) => (
          <div
            key={item.id}
            className={item.id === 1 ? "category-item wide" : "category-item"}
          >
            <div className="details">
              <div className="types-number">{item.type}</div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <img className={`img-${item.id}`} src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
