import "./Products.css";

import { FaStar } from "react-icons/fa6";
import { MdOutlineReadMore } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export default function ProductsContent({ contentData }) {
  return (
    <div className="sofa-content">
      {contentData.map((item) => (
        <div key={item.id} className="item">
          <div className="item-img">
            <img src={item.img} />
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
  );
}
