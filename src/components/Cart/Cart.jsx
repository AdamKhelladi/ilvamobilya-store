import { useEffect, useState } from "react";
import "./Cart.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Cart({ cartItems, deleteItem, orders }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const isFormValid =
    cartItems.length > 0 &&
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.address.trim();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        localStorage.removeItem("cartItems");
        setFormData({ name: "", email: "", phone: "", address: "" });
        alert("Order sent successfully ✅");
      } else {
        alert("Something went wrong ❌");
      }
    });
  }

  useEffect(() => {
    let total = cartItems.reduce((acc, item) => {
      let clearPrice = item.price.replace(/[^0-9.]/g, "");
      return acc + parseInt(clearPrice);
    }, 0);

    setTotalPrice(total.toLocaleString());
  }, [cartItems]);

  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-content">
            <div className="cart-products">
              <div className="cart-left-title">
                <IoCartOutline className="cart-icon"/>
                <h3>Your Cart ({orders})</h3>
              </div>
              
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
                      <FaRegTrashAlt
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
              <form
                className="form"
                action=""
                method="POST"
                onSubmit={handleSubmit}
              >
                <div>
                  <IoPersonOutline className="icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>



                <div>
                  <MdOutlinePhone className="icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <IoLocationOutline className="icon" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Write more details about the products you ordered.."
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="form-btn"
                  disabled={!isFormValid}
                >
                  Order Now
                </button>

                {cartItems.map((item, index) => (
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
                ))}

                <input
                  type="hidden"
                  name="total_price"
                  value={`${totalPrice} DZD`}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
