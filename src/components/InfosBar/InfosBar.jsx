import "./InfosBar.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

export default function InfosBar() {
  return (
    <div className="infosBar-container">
      <div className="container">
        <div className="content">
          <div className="phone-number">Call Us: +213 667 845 302</div>
          <div className="sign">
            <div>Sign up and GET 25% OFF for your first order:</div>
            <a href="#">Sign-up Now</a></div>
          <div className="social-media">
            <FaFacebook className="icon" />
            <RiInstagramFill className="icon" />
            <AiFillTikTok className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
