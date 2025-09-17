import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../assets/hero/home-img-1.png";
import Image2 from "../../assets/hero/home-img-4.png";
import Image3 from "../../assets/hero/home-img-6.png";

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
                <h3
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {item.subtitle}
                </h3>
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {item.title}
                </h1>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {item.Description}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="0"
                  data-aos-delay="300"
                >
                  <button>
                    <a href="#categories">Shop By Category</a>
                  </button>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-once="true"
                className="slide-img"
              >
                <img className={`img-${item.id}`} src={item.img} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
