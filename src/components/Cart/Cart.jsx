import "./Cart.css";
import { IoMdClose } from "react-icons/io";

export default function Cart({ cartItems, deleteItem }) {
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
            Total: <span>1999</span>$
          </div>
          <div className="payment-info">Payment Info</div>
        </div>
      </div>
    </div>
  );
}
