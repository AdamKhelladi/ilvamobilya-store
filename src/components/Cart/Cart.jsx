import { useEffect, useState } from "react";
import "./Cart.css";
import { IoMdClose } from "react-icons/io";

import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Cart({ cartItems, deleteItem }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = cartItems.reduce((acc, item) => {
      let clearPrice = item.price.replace(/[^0-9.]/g, "");
      return acc + parseInt(clearPrice);
    }, 0);

    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-content">
            <div className="cart-products">
              <h3>My Cart</h3>
              {cartItems.length < 1 ? (
                <p className="cart-empty-msg">
                  Your cart is empty 🛒 — start shopping now!
                </p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <div className="item-content">
                      <div>
                        <h3>{item.name}</h3>
                        <p className="item-category">{item.category}</p>
                        <p>{item.price}</p>
                      </div>
                      <IoMdClose
                        className="close-btn"
                        onClick={() => {
                          deleteItem(item);
                        }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 ? (
              <div className="coupon">
                <input type="text" placeholder="Enter coupon" />
                <button>Apply coupon</button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="cart-right">
          <div className="total-price">
            Total Price: <span>{totalPrice}</span> DZD
          </div>
          <div className="payment-info">
            <h3>Payment Details</h3>

            <div className="client-infos">
              <form className="form" action="" method="POST">
                <div>
                  <IoPersonOutline className="icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    // value={formData.name}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <MdOutlineMail className="icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <MdOutlinePhone className="icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    // value={formData.phone}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <IoLocationOutline className="icon" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    // value={formData.address}
                    // onChange={handleChange}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  // onChange={handleChange}
                />

                {/* {cartItems.map((item, index) => (
                  <div key={index}>
                    <input
                      type="hidden"
                      name={`product_${index + 1}_name`}
                      value={item.name}
                    />
                    <input
                      type="hidden"
                      name={`product_${index + 1}_price`}
                      value={item.price}
                    />
                  </div>
                ))} */}

                <input
                  type="hidden"
                  name="total_price"
                  value={`${totalPrice}$`}
                />

                <button
                  type="submit"
                  className="form-btn"
                  // disabled={!isFormValid}
                  // onClick={handleSubmitBtn}
                >
                  Order Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
