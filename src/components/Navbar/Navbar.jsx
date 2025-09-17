import "./Navbar.css";
import { LuStore } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

export default function Navbar({ handleShowMenu }) {
  return (
    <div className="navbar-container">
      <div className="container">
        <div className="logo-name">
          <a href="#home">
            <LuStore className="navbar-icon" />
          </a>
          <h1>
            <a href="#home">IlvaMobilya</a>
          </h1>
        </div>
        <div className="navbar-input">
          <input type="text" placeholder="Search" />
          <FaSearch className="serach-icon" />
        </div>
        <div className="navbar-icons">
          <RxHamburgerMenu className="navbar-icon" onClick={handleShowMenu}/>
          <IoCartOutline className="navbar-icon" />
          <IoPersonOutline className="navbar-icon" />
        </div>
      </div>
    </div>
  );
}
