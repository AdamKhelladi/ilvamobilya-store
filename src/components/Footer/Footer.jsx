import "./Footer.css";

import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { LuStore } from "react-icons/lu";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Footer() {
  const FooterLinks = [
    { id: 1, name: "Home", link: "/#home" },
    { id: 3, name: "About Us", link: "/#about" },
    { id: 4, name: "Services", link: "/#services" },
    { id: 2, name: "Categories", link: "/#categories" },
  ];

  return (
    <motion.div
      className="footer-container"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container">
        <div className="content">
          <div className="left-footer">
            <div className="name">
              <LuStore className="footer-icon" />
              <h1>IlvaMobilya</h1>
            </div>
            <p>Helping you create the dream home you've always wanted.</p>
            <button>
              <a href="/#products">Shop Now</a>
            </button>
          </div>

          <div className="phone-div">
            <div className="footer-links">
              <h1>Important Links</h1>
              {FooterLinks.map((item) => (
                <div key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </div>
              ))}
            </div>

            <div className="right-footer">
              <div className="address">
                <h1>Address</h1>
                <div className="location">
                  <FaMapLocationDot className="info-icon" />
                  <p>Ras El Oued, Algeria</p>
                </div>
                <div className="phone">
                  <IoMdPhonePortrait className="info-icon" />
                  <p>+213 676100627</p>
                </div>
                <div className="social-media">
                  <a
                    href="https://www.instagram.com/ilvamobilya"
                    target="_blank"
                  >
                    <FaInstagram className="icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/ilvamobilya"
                    target="_blank"
                  >
                    <FaFacebookF className="icon" />
                  </a>
                  <a href="https://www.tiktok.com/ilvamobilya" target="_blank">
                    <IoLogoTiktok className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-text">
          <p>©{new Date().getFullYear()} IlvaMobilya. All rights reserved.</p>
          {/* <p>Built with 🤎 for our customers</p> */}
          <p>Made with 🤎 by @adxmtech</p>
        </div>
      </div>
    </motion.div>
  );
}
