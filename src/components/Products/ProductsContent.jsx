import "./Products.css";

import { FaStar } from "react-icons/fa6";
import { MdOutlineReadMore } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function ProductsContent({ contentData, addToCart }) {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  let displayedProducts = showAll ? contentData : contentData.slice(0, 6);

  function handleClickShowAll() {
    setShowAll(true);
  }

  function handleClickDetails(currentItem) {
    navigate(`/product/${currentItem.id}`, { state: currentItem });
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="product-content">
        {displayedProducts.map((item) => (
          <motion.div
            key={item.id}
            className="item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="item-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="item-content">
              <div className="stars-rate">
                <p>{item.category}</p>
                <div className="rate">
                  <div className="star">
                    <FaStar />
                  </div>
                  <span>{item.rate}</span>
                </div>
              </div>
              <div className="content">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <div className="item-btns">
                  <MdOutlineReadMore
                    className="btn"
                    onClick={() => {
                      handleClickDetails(item);
                    }}
                  />
                  <IoCartOutline
                    className="btn"
                    onClick={() => {
                      addToCart(item);
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll ? (
        <button className="show-all" onClick={handleClickShowAll}>
          Show all products
        </button>
      ) : null}
    </div>
  );
}
