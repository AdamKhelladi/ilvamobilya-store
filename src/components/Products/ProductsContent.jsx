import "./Products.css";

import { FaStar } from "react-icons/fa6";
import { MdOutlineReadMore } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

export default function ProductsContent({ contentData }) {
  const [showAll, setShowAll] = useState(false);

  let displayedProducts = showAll ? contentData : contentData.slice(0, 6);

  function handleClickShowAll() {
    setShowAll(true);
  }

  return (
    <>
      <div className="product-content">
        {displayedProducts.map((item) => (
          <div key={item.id} className="item">
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
                  <MdOutlineReadMore className="btn" />
                  <IoCartOutline className="btn" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll ? (
        <button className="show-all" onClick={handleClickShowAll}>
          Show all products
        </button>
      ) : null}
    </>
  );
}
