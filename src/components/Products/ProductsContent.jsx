import "./Products.css";

import { FaStar } from "react-icons/fa6";

export default function ProductsContent({ sofasContentData }) {
  return (
    <div className="sofa-content">
      {sofasContentData.map((item) => (
        <div key={item.id} className="item">
          <div className="item-img">
            <img src={item.img} />
          </div>
          <div className="item-content">
            <div className="stars-rate">
              <p>Sofa Furniture</p>
              <div className="rate">
                <div className="star">
                  <FaStar />
                </div>
                <span>{item.rate}</span>
              </div>
            </div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div className="item-btns">
              <button>
                <a href="#">Add to cart</a>
              </button>
              <button>
                <a href="#">Details</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
