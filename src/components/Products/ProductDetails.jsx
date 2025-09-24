import { useLocation, useParams } from "react-router-dom";
import "./Products.css";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const { state: product } = useLocation();

  if (!product)
    return <p className="not-found-product">Product {id} not found</p>;

  return (
    <div className="container">
      <div className="product-details">
        <img src={product.img} alt={product.name} />
        <div className="content">
          <div className="stars-rate">
            <p>{product.category}</p>
            <div className="rate">
              <div className="star">
                <FaStar />
              </div>
              <span>{product.rate}</span>
            </div>
          </div>
          <div className="details-content">
            <div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <IoCartOutline
              className="btn"
              onClick={() => {
                addToCart(product);
              }}
            />
          </div>
          <p className="details-description">{product.description}</p>
          <a href="https://www.facebook.com/ilvamobilya" target="_blank">
            View on Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
