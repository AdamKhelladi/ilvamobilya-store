import "./Navbar.css";
import { LuStore } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

export default function Menu({ handleShowMenu }) {
  const MenuLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 3, name: "About Us", link: "#about" },
    { id: 4, name: "Services", link: "#services" },
    { id: 2, name: "Categories", link: "#categories" },
    { id: 5, name: "Products", link: "#products" },
  ];

  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-head">
          <div className="logo-name">
            <a href="#home">
              <LuStore className="navbar-icon" />
            </a>
            <h1>
              <a href="#home">IlvaMobilya</a>
            </h1>
          </div>
          <div className="menu-close-icon">
            <IoCloseSharp onClick={handleShowMenu} />
          </div>
        </div>
        <div className="menu-links">
          {MenuLinks.map((item) => (
            <a key={item.id} href={item.link} onClick={handleShowMenu}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
