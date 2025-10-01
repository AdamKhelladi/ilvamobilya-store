import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Menu from "./components/Navbar/Menu";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Testimonials from "./components/Testimonials/Testimonials";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function AppContent() {
  const [showMenu, setShowMenu] = useState(false);
  const [orders, setOrders] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const hideFooter =
    location.pathname === "/cart" || location.pathname.startsWith("/product");

  function handleShowMenu() {
    const newState = !showMenu;
    setShowMenu(newState);

    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  function getCartFromLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem("cartItems")) || [];
    } catch {
      return [];
    }
  }

  function addToCart(item) {
    setCartItems((prev) => {
      if (!prev.some((product) => product.id === item.id)) {
        const updated = [...prev, item];
        localStorage.setItem("cartItems", JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  }

  function deleteItem(item) {
    setCartItems((prev) => {
      const updated = prev.filter((product) => product.id !== item.id);
      localStorage.setItem("cartItems", JSON.stringify(updated));

      return updated;
    });
  }

  useEffect(() => {
    setCartItems(getCartFromLocalStorage());
  }, []);

  useEffect(() => {
    setOrders(cartItems.length);
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar handleShowMenu={handleShowMenu} orders={orders} />
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
              <Testimonials />
            </div>
          }
        ></Route>

        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        ></Route>

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              deleteItem={deleteItem}
              orders={orders}
            />
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
