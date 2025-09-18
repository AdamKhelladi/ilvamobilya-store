import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Menu from "./components/Navbar/Menu";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Services from "./components/Services/Services";

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
    <div className="App">
      <Navbar handleShowMenu={handleShowMenu} />
      {showMenu ? (
        <Menu handleShowMenu={handleShowMenu} showMenu={showMenu} />
      ) : null}

      <div className="container">
        <Hero />
        <Services />
        <Categories />
      </div>
    </div>
  );
}

export default App;
