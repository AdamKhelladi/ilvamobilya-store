import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../assets/hero/home-img-1.png";
import Image2 from "../../assets/hero/home-img-4.png";
import Image3 from "../../assets/hero/home-img-6.png";

import { motion } from "framer-motion";

export default function Hero() {
  const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "New Arrivals",
      title: "Flexible Chair",
      Description:
        "A stylish and adaptable chair crafted to perfectly fit modern interiors. Its ergonomic design ensures long-lasting comfort, making it ideal for both work and relaxation spaces.",
    },
    {
      id: 2,
      img: Image3,
      subtitle: "New Arrivals",
      title: "Comfortable Sofas",
      Description:
        "Plush sofas made with premium fabric and generous cushioning for everyday use. Designed to combine elegance with coziness, they transform your living room into a warm retreat.",
    },
    {
      id: 3,
      img: Image2,
      subtitle: "New Arrivals",
      title: "Beautiful Tables",
      Description:
        "Elegant tables built with durable materials and timeless design. Whether for dining or decoration, they add sophistication and functionality to your home environment.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="hero-container">
      <div>
        <Slider {...settings} className="slider">
          {HeroData.map((item) => (
            <div key={item.id} className="slider-content">
              <div className="details">
                <motion.h3
                  initial={{ scale: 1.5, opacity: 0.2 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {item.subtitle}
                </motion.h3>
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {item.Description}
                </motion.p>
                <motion.div
                  initial={{ y: 100, opacity: 0.2 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <button>
                    <a href="#categories">Shop By Category</a>
                  </button>
                </motion.div>
              </div>
              <motion.div
                className="slide-img"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                <img src={item.img} />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
