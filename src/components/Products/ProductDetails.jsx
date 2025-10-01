import { useLocation, useParams } from "react-router-dom";
import "./Products.css";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import Fabrics from "../Fabrics/Fabrics";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const { state: product } = useLocation();

  if (!product)
    return <p className="not-found-product">Product {id} not found</p>;

  return (
    <div className="container">
      <div className="product-details">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
        </motion.div>

        <motion.p
          className="more-on-fb"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ⬇️ Click to see more details on Facebook ⬇️
        </motion.p>

        <motion.div
          class="fb-post"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <iframe
            title="Product demo video"
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
        </motion.div>

        <Fabrics />
      </div>
    </div>
  );
}
