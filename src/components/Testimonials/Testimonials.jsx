import "./Testimonials.css";
import Image1 from "../../assets/testimonials/img-6.jpg";
import Image2 from "../../assets/testimonials/img-2.jpg";
import Image3 from "../../assets/testimonials/img-3.jpg";
import Image4 from "../../assets/testimonials/img-4.jpg";
import Image5 from "../../assets/testimonials/img-5.jpg";
import Image6 from "../../assets/testimonials/img-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <motion.div
      className="testimonials-container"
      id="testimonials"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="testimonials-title">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Client Satisfaction
        </motion.h1>
        <motion.p
          className="first-p"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What our customers say about us
        </motion.p>
        <motion.p
          className="second-p"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We take pride in delivering high-quality products and services that
          bring comfort and style to our clients. Every piece is carefully
          designed with attention to detail.
        </motion.p>
        <motion.p
          className="second-p"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The kind words from our customers inspire us to keep improving and
          providing an exceptional experience for everyone we serve.
        </motion.p>
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
          <img src={Image1} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="Testimonials image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </motion.div>
  );
}
