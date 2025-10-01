import "./Navbar.css";
import { LuStore } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

export default function Menu({ handleShowMenu }) {
  const MenuLinks = [
    { id: 1, name: "Home", link: "/#home" },
    { id: 2, name: "About Us", link: "/#about" },
    { id: 3, name: "Services", link: "/#services" },
    { id: 4, name: "Categories", link: "/#categories" },
    { id: 5, name: "Products", link: "/#products" },
    { id: 6, name: "Client Satisfaction", link: "/#testimonials" },
  ];

  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-head">
          <div className="logo-name">
            <a href="/#home">
              <LuStore className="navbar-icon" />
            </a>
            <h1>
              <a href="/#home">IlvaMobilya</a>
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
