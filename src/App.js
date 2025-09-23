import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import Menu from "./components/Navbar/Menu";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [orders, setOrders] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleShowMenu() {
    const newState = !showMenu;
    setShowMenu(newState);

    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

  function addToCart(item) {
    if (!cart.some((product) => product.name === item.name)) {
      cart.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cart));

      setCartItems(cart);
    }
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    setOrders(cartItems.length);
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Navbar handleShowMenu={handleShowMenu} orders={orders}/>
        {showMenu ? (
          <Menu handleShowMenu={handleShowMenu} showMenu={showMenu} />
        ) : null}

        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Hero />
                <About />
                <Services />
                <Categories />
                <Products addToCart={addToCart} />
              </div>
            }
          ></Route>

          <Route path="/product/:id" element={<ProductDetails />}></Route>

          <Route path="/cart" element={<Cart cartItems={cartItems} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
