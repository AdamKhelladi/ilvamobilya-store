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
        </div>

        <p className="more-on-fb">🢃 Check full details on Facebook 🢃</p>

        <div class="fb-post">
          <iframe
            className="post-frame"
            src={product.fbLink}
            width="500"
            height="659"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="yes"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
