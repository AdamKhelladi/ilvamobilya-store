import "./Fabrics.css";
import Image1 from "../../assets/fabrics/img-1.jpg";
import Image2 from "../../assets/fabrics/img-2.jpg";
import Image3 from "../../assets/fabrics/img-3.jpg";
import Image4 from "../../assets/fabrics/img-4.jpg";
import Image5 from "../../assets/fabrics/img-5.jpg";
import Image6 from "../../assets/fabrics/img-6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Fabrics() {
  return (
    <motion.div
      className="fabrics-container"
      id="fabrics"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="fabrics-title">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Top-Quality Fabrics
        </motion.h1>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={Image1} alt="FabricsIma" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="FabricsIma" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="FabricsIma" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="FabricsIma" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="FabricsIma" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="FabricsIma" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </motion.div>
  );
}
