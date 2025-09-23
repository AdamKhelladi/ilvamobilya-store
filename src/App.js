import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
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

  function handleShowMenu() {
    const newState = !showMenu;
    setShowMenu(newState);

    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar handleShowMenu={handleShowMenu} />
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
                <Products />
              </div>
            }
          ></Route>

          <Route path="/product/:id" element={<ProductDetails />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
