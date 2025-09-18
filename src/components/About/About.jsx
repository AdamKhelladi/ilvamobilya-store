import "./About.css";
import Image from "../../assets/about/about-img.jpg";
import Image2 from "../../assets/about/about-img-phone-2.jpg";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-images">
        <img src={Image} alt="About us image" />
      </div>
      <div className="about-infos">
        <h1>About Us</h1>
        <img className="about-img-phone" src={Image2}/>
        <p>
          Founded 2 years ago, IlvaMobilya has grown from a small workshop into
          a trusted name in Algeria for high-quality furniture. We specialize in
          crafting sofas, tables, and chairs that combine comfort, durability,
          and modern design.
        </p>
        <p>
          What makes us different is our dedication to every detail. From
          carefully selected materials to skilled craftsmanship, we make sure
          each piece is strong, stylish, and built to last. Whether you’re
          looking for luxury, affordability, or unique custom designs—we cover
          it all.
        </p>
        <p>
          As a local Algerian brand, we’re proud to serve homes across the
          country with furniture that brings families together. Our mission is
          simple: to create beautiful, functional, and lasting pieces that make
          your home more welcoming every day.
        </p>
        <button>
          <a href="#products">Our Products</a>
        </button>
      </div>
    </div>
  );
}
