import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Menu from "./components/Navbar/Menu";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="App">
      <Navbar handleShowMenu={handleShowMenu} />
      {showMenu ? <Menu handleShowMenu={handleShowMenu} showMenu={showMenu}/> : null}

      <div className="container">
        <Hero />
        <Categories />
      </div>
    </div>
  );
}

export default App;
