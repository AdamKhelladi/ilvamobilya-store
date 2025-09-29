import "./Categories.css";
import Image1 from "../../assets/category/category-img-4.png";
import Image2 from "../../assets/category/category-img-2.png";
import Image3 from "../../assets/category/category-img-3.png";

import { motion } from "framer-motion";

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
              <motion.div
                className="types-number"
                initial={{ scale: 0.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {item.type}
              </motion.div>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {item.title}
              </motion.h1>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {item.description}
              </motion.p>
            </div>

            <motion.img
              className={`img-${item.id}`}
              src={item.img}
              alt={item.title}
              initial={{opacity: 0 }}
              whileInView={{opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
